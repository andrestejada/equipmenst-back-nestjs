import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import {
  INestApplication,
  NotFoundException,
  HttpStatus,
} from '@nestjs/common';
import { EquipoControlador } from 'src/infraestructura/equipos/controlador/equipo.controlador';
import { AppLogger } from 'src/infraestructura/configuracion/ceiba-logger.service';
import { ServicioCrearEquipo } from '../../../../src/dominio/equipo/servicio/servicio-crear-equipo';
import { RepositorioEquipo } from '../../../../src/dominio/equipo/puerto/repositorio/repositorio-equipo';
import { servicioCrearEquipoProveedor } from '../../../../src/infraestructura/equipos/proveedor/servicio/servicio-crear-usuario.proveedor';
import { Equipo } from 'src/dominio/equipo/modelo/equipo';
import { createSandbox } from 'sinon';
import { DaoEquipo } from '../../../../src/dominio/equipo/puerto/dao/DaoEquipo';
import { ManejadorCrearEquipo } from '../../../../src/aplicacion/equipo/comando/crear-equipo.manejador';
import { ManjeadorObtenerEquipos } from 'src/aplicacion/equipo/consulta/obtener-equipos.manejador';
import { FiltroExcepcionesDeNegocio } from 'src/infraestructura/excepciones/filtro-excepciones-negocio';
import { daoEquipo, repositorioEquipo } from '../../../util/repositorioEquipos';
import { ManejadorEliminarEquipo } from '../../../../src/aplicacion/equipo/comando/eliminar-equipos.manejador';
import { ServicioEliminarEquipo } from '../../../../src/dominio/equipo/servicio/servicio-elimar-equipo';
import { servicioEliminarEquipoProveedor } from '../../../../src/infraestructura/equipos/proveedor/servicio/servicio-eliminar-equipo.proveedor';
import { ServicioEditarEquipo } from '../../../../src/dominio/equipo/servicio/servicio-editarEquipo';
import { servicioEditarEquipoProveedor } from 'src/infraestructura/equipos/proveedor/servicio/servicio-editarEquipo.proveedor';
import { ManejadorEditarEquipo } from '../../../../src/aplicacion/equipo/comando/editar-equipo.manejador';
import { ManjeadorPaginarEquipos } from '../../../../src/aplicacion/equipo/consulta/paginarEquiposManejador';
import { Usuario } from 'src/dominio/usuario/modelo/usuario';


const sinonSandbox = createSandbox();
describe('Pruebas controlador de equipos', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [EquipoControlador],
      providers: [
        AppLogger,
        {
          provide: ServicioCrearEquipo,
          inject: [RepositorioEquipo],
          useFactory: servicioCrearEquipoProveedor,
        },
        {
          provide: ServicioEliminarEquipo,
          inject: [RepositorioEquipo],
          useFactory: servicioEliminarEquipoProveedor,
        },
        {
          provide: ServicioEditarEquipo,
          inject: [RepositorioEquipo],
          useFactory: servicioEditarEquipoProveedor,
        },
        {
          provide: DaoEquipo,
          useValue: daoEquipo,
        },
        {
          provide: RepositorioEquipo,
          useValue: repositorioEquipo,
        },
        ManejadorCrearEquipo,
        ManjeadorObtenerEquipos,
        ManejadorEliminarEquipo,
        ManejadorEditarEquipo,
        ManjeadorPaginarEquipos
      ],
    }).compile();
    app = moduleRef.createNestApplication();
    const logger = await app.resolve(AppLogger);
    logger.customError = sinonSandbox.stub();
    app.useGlobalFilters(new FiltroExcepcionesDeNegocio(logger));
    await app.init();
  });

  afterEach(() => {
    sinonSandbox.restore();
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  afterAll(async () => {
    await app.close();
  });
  const id = 1;
  const equipo = new Equipo(
    123,
    'testEquipment',
    'fabrica',
    '2022-01-21T18:15:13.195Z',
    new Usuario('andres','tejada','correo@correo.com','12345')
  );
  const { codigo, fechaMantenimiento, ubicacion, descripcion ,usuario } = equipo;

  const data = {
    id: 1,
    codigo,
    fechaMantenimiento: fechaMantenimiento.toISOString(),
    ubicacion,
    descripcion,
    usuario
  };

  it('should be save correctly a equipment', async () => {
    jest.spyOn(repositorioEquipo, 'crearEquipo').mockResolvedValue({
      codigo:123,
      descripcion:'equipo1',
      fechaMantenimiento:'2022-01-21T18:15:13.195Z',
      ubicacion:'ubicacion1',
      usuarioId:1,
      id:1      
    });
    const response = await request(app.getHttpServer()).post('/equipos');
    expect(repositorioEquipo.crearEquipo).toHaveBeenCalledWith(equipo);
    expect(response.status).toBe(201);
    expect(response.body).toEqual(data);
  });

  it('should be delete fail with wrong id a equipment', async () => {
    const msg = `El id "${id}" no fue encontrado`;
    //await repositorioEquipo.eliminarEquipo(id);
    jest
      .spyOn(repositorioEquipo, 'eliminarEquipo')
      .mockRejectedValue(new NotFoundException(msg));
    const response = await request(app.getHttpServer()).delete('/equipos/1');
    expect(response.body.statusCode).toBe(HttpStatus.NOT_FOUND);
    expect(response.body.message).toBe(msg);
  });

  it('should be delete correctly id a equipment', async () => {
    const response = await request(app.getHttpServer()).delete('/equipos/1');
    expect(response.status).toBe(200);
  });

  it('should be edit correctly a equipment', async () => {
    jest.spyOn(repositorioEquipo, 'editarEquipo').mockResolvedValue(data);
    const response = await request(app.getHttpServer())
      .put('/equipos/1')
      .expect(200);
    expect(response.body).toEqual(data)
  });

  it('should be return all equipments avaliable', async () => {

    const data={
      codigo:123,
      descripcion:'equipo1',
      fechaMantenimiento:'2022-01-21T18:15:13.195Z',
      ubicacion:'ubicacion1',
      usuario:1,
      id:1
    }
    jest.spyOn(daoEquipo, 'obtenerTodo').mockResolvedValue([data]);
    const response = await request(app.getHttpServer())
      .get('/equipos')
      .expect(200);
    expect(response.body).toEqual([data]);
  });

  it('should be filter a paginate the equipments', async () => {
    const limit = 3;
    const page = 1;
    const dataResponse={total:1,page,data:[data]}
    jest.spyOn(daoEquipo,'filtrarEquipos').mockResolvedValue(dataResponse)
    const response = await request(app.getHttpServer())
      .get(`/equipos/filter?limit=${limit}&page=${page}`)
      .expect(200);
    expect(response.body).toEqual(dataResponse);
  });
});
