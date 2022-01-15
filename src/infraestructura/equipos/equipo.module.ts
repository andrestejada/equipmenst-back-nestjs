import { Module } from "@nestjs/common";
import { EquipoControlador } from './controlador/equipo.controlador';
import { EquipoProveedorModule } from './proveedor/equipo-proveedor.module';

@Module({
  imports:[EquipoProveedorModule],
  controllers:[EquipoControlador]
})
export class EquipoModule{}