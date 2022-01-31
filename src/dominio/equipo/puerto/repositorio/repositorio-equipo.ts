import { Equipo } from '../../modelo/equipo';
import { EquipoCreadoDto } from 'src/aplicacion/equipo/consulta/dto/EquipoCreadoDto';
import { EquipoEditadoDto } from 'src/aplicacion/equipo/consulta/dto/EquipoEditadoDto';

export abstract class RepositorioEquipo {
  abstract crearEquipo(equipo:Equipo): Promise<EquipoCreadoDto>;
  abstract eliminarEquipo(id:number):Promise<void>;
  abstract editarEquipo(id:number,equipo:Partial<Equipo>):Promise<EquipoEditadoDto>
  abstract existeCodigoEquipo(codigo:number):Promise<boolean>
}
