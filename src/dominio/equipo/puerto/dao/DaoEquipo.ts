import { EquipoDto } from "src/aplicacion/equipo/consulta/dto/equipo.dto";
import { PaginadorDto } from "src/aplicacion/equipo/consulta/dto/PaginadorDto";
import { EquipoFiltradoDto } from '../../../../aplicacion/equipo/consulta/dto/EquiposFiltradosDto';

export abstract class DaoEquipo {
  abstract obtenerTodo() : Promise<EquipoDto[]>
  abstract filtrarEquipos(querys:PaginadorDto):Promise<EquipoFiltradoDto>
}