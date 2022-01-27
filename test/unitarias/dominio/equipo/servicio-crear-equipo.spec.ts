import { ServicioCrearEquipo } from 'src/dominio/equipo/servicio/servicio-crear-equipo';
import { Equipo } from '../../../../src/dominio/equipo/modelo/equipo';
import { repositorioEquipo } from '../../../util/repositorioEquipos';
import { ErrorDeNegocio } from '../../../../src/dominio/errores/error-de-negocio';

describe('servicio crear equipo', () => {
  //let repositorioEquipo:SinonStubbedInstance<RepositorioEquipo>
  let servicio: ServicioCrearEquipo;
  beforeEach(() => {
    //repositorioEquipo = createStubObj<RepositorioEquipo>(['crearEquipo'])
    servicio = new ServicioCrearEquipo(repositorioEquipo);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  const equipo = new Equipo(
    123,
    'testEquipment',
    'fabrica',
    '2022-01-21T18:15:13.195Z',
  );
  it('debe de llamar la funcion crear equipo con ciertos argumentos', async () => {
    // const entity = new EquipoEntidad()
    // jest.spyOn(repositorioEquipo,'crearEquipo').mockImplementation(()=>Promise.resolve(entity))
    await servicio.ejecutar(equipo);
    expect(repositorioEquipo.crearEquipo).toHaveBeenCalled();
    expect(repositorioEquipo.crearEquipo).toHaveBeenCalledWith(equipo);
  });

  it('el codigo ya se encuentra registrado', async () => {
    jest.spyOn(repositorioEquipo, 'existeCodigoEquipo').mockResolvedValue(true);
    await expect(servicio.ejecutar(equipo)).rejects.toThrow(
      new ErrorDeNegocio(
        `El codigo ${equipo.codigo} ya existe intenta con otro`,
      ),
    );
  });
});
