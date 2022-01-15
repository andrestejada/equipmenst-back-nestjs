import { Controller, Get } from "@nestjs/common";
import { ManjeadorObtenerEquipos } from '../../../aplicacion/equipo/consulta/obtener-equipos.manejador';
import { EquipoDto } from '../../../aplicacion/equipo/consulta/dto/equipo.dto';

@Controller('equipos')

export class EquipoControlador {
  constructor(private manejadorObtenerEquipos: ManjeadorObtenerEquipos){}

  @Get()
  obtenerTodo():Promise<EquipoDto[]>{
    return this.manejadorObtenerEquipos.ejecutar()
  }
}