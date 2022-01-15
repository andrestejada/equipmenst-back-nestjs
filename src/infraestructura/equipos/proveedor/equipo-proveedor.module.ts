import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManjeadorObtenerEquipos } from 'src/aplicacion/equipo/consulta/obtener-equipos.manejador';
import { Equipo } from '../entidad/equipo.entidad';
import { daoEquipoProvider } from './dao/dao-equipo.provedor';

@Module({
  imports: [TypeOrmModule.forFeature([Equipo])],
  providers: [daoEquipoProvider,ManjeadorObtenerEquipos],
  exports: [daoEquipoProvider,ManjeadorObtenerEquipos],
})
export class EquipoProveedorModule {}
