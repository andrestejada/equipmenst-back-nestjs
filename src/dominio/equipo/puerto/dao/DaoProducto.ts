import { EquipoDto } from "src/aplicacion/equipo/consulta/dto/equipo.dto";

export abstract class DaoEquipo {
  abstract obtenerTodo() : Promise<EquipoDto[]>
}