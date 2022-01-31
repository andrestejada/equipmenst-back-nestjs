import { PaginadorDto } from "src/aplicacion/equipo/consulta/dto/PaginadorDto";
import { EquipoFiltradoDto } from '../../../../aplicacion/equipo/consulta/dto/EquiposFiltradosDto';
import { ObtenerEquiposDto } from '../../../../aplicacion/equipo/consulta/dto/ObtenerEquiposDto';

export abstract class DaoEquipo {
  abstract obtenerTodo() : Promise<ObtenerEquiposDto[]>
  abstract filtrarEquipos(querys:PaginadorDto):Promise<EquipoFiltradoDto>
}