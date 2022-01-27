import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManjeadorObtenerEquipos } from 'src/aplicacion/equipo/consulta/obtener-equipos.manejador';
import { EquipoEntidad } from '../entidad/equipo.entidad';
import { daoEquipoProvider } from './dao/dao-equipo.provedor';
import { ManejadorCrearEquipo } from '../../../aplicacion/equipo/comando/crear-equipo.manejador';
import { repositorioEquipoProvider } from './repositorio/repositorioEquipoProvider';
import { servicioCrearEquipoProveedor } from './servicio/servicio-crear-usuario.proveedor';
import { RepositorioEquipo } from '../../../dominio/equipo/puerto/repositorio/repositorio-equipo';
import { ServicioCrearEquipo } from 'src/dominio/equipo/servicio/servicio-crear-equipo';
import { ServicioEliminarEquipo } from '../../../dominio/equipo/servicio/servicio-elimar-equipo';
import { servicioEliminarEquipoProveedor } from './servicio/servicio-eliminar-equipo.proveedor';
import { ManejadorEliminarEquipo } from '../../../aplicacion/equipo/comando/eliminar-equipos.manejador';
import { ManejadorEditarEquipo } from '../../../aplicacion/equipo/comando/editar-equipo.manejador';
import { ServicioEditarEquipo } from '../../../dominio/equipo/servicio/servicio-editarEquipo';
import { servicioEditarEquipoProveedor } from './servicio/servicio-editarEquipo.proveedor';
import { ManjeadorPaginarEquipos } from '../../../aplicacion/equipo/consulta/paginarEquiposManejador';

@Module({
  imports: [TypeOrmModule.forFeature([EquipoEntidad])],
  providers: [
    {
      provide: ServicioCrearEquipo,
      useFactory: servicioCrearEquipoProveedor,
      inject: [RepositorioEquipo],
    },
    {
      provide:ServicioEliminarEquipo,
      useFactory:servicioEliminarEquipoProveedor,
      inject:[RepositorioEquipo]
    },
    {
      provide:ServicioEditarEquipo,
      useFactory:servicioEditarEquipoProveedor,
      inject:[RepositorioEquipo]
    },
    ManjeadorObtenerEquipos,
    ManejadorCrearEquipo,
    ManejadorEliminarEquipo,
    ManejadorEditarEquipo,
    ManjeadorPaginarEquipos,
    daoEquipoProvider,
    repositorioEquipoProvider,
  ],
  exports: [
    //ServicioCrearEquipo,
    // ServicioEliminarEquipo,
    // ServicioEditarEquipo,
    ManjeadorObtenerEquipos,
    ManejadorCrearEquipo,
    ManejadorEliminarEquipo,
    ManejadorEditarEquipo,
    ManjeadorPaginarEquipos,
    daoEquipoProvider,
    repositorioEquipoProvider,
  ],
})
export class EquipoProveedorModule {}
