import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ManjeadorObtenerEquipos } from '../../../aplicacion/equipo/consulta/obtener-equipos.manejador';
import { EquipoDto } from '../../../aplicacion/equipo/consulta/dto/equipo.dto';
import { ManejadorCrearEquipo } from '../../../aplicacion/equipo/comando/crear-equipo.manejador';
import { ComandoCrearEquipo } from '../../../aplicacion/equipo/comando/crear-equipo.comando';
import { ManejadorEliminarEquipo } from '../../../aplicacion/equipo/comando/eliminar-equipos.manejador';
import { ManejadorEditarEquipo } from 'src/aplicacion/equipo/comando/editar-equipo.manejador';
import { ComandoEditarEquipo } from '../../../aplicacion/equipo/comando/editar-equipo.comando';
import { PaginadorDto } from '../../../aplicacion/equipo/consulta/dto/PaginadorDto';
import { ManjeadorPaginarEquipos } from 'src/aplicacion/equipo/consulta/paginarEquiposManejador';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('equipos')
export class EquipoControlador {
  constructor(
    private manejadorObtenerEquipos: ManjeadorObtenerEquipos,
    private manejadorCrearEquipo: ManejadorCrearEquipo,
    private manejadorEliminarEquipo: ManejadorEliminarEquipo,
    private manejadorEditarEquipo: ManejadorEditarEquipo,
    private manejadorPaginarEquipos: ManjeadorPaginarEquipos,
  ) {}

  @Get()
  obtenerTodo(): Promise<EquipoDto[]> {
    return this.manejadorObtenerEquipos.ejecutar();
  }
  @Get('filter')
  obtenerEquipos(@Query() params: PaginadorDto) {
    return this.manejadorPaginarEquipos.ejecutar(params);
  }

  @Post()
  crearEquipo(@Body() comandoCrearEquipo: ComandoCrearEquipo) {
    return this.manejadorCrearEquipo.ejecutar(comandoCrearEquipo);
  }

  @Put('/:id')
  editarEquipo(
    @Param('id', ParseIntPipe) id: number,
    @Body() comandoEditarEquipo: ComandoEditarEquipo,
  ) {
    return this.manejadorEditarEquipo.ejecutar(id, comandoEditarEquipo);
  }

  @Delete('/:id')
  borrarEquipoPorID(@Param('id', ParseIntPipe) id: number) {
    return this.manejadorEliminarEquipo.ejecutar(id);
  }
}
