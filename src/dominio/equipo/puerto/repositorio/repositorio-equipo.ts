import { Equipo } from '../../modelo/equipo';
import { ComandoCrearEquipoRespuesta } from '../../../../aplicacion/equipo/comando/crear-equipo-repuesta.comado';
import { ComandoEditarEquipoRespuesta } from '../../../../aplicacion/equipo/comando/editar-equipo.-respuesta.comando';

export abstract class RepositorioEquipo {
  abstract crearEquipo(equipo:Equipo): Promise<ComandoCrearEquipoRespuesta>;
  abstract eliminarEquipo(id:number):Promise<void>;
  abstract editarEquipo(id:number,equipo:Partial<Equipo>):Promise<ComandoEditarEquipoRespuesta>
  abstract existeCodigoEquipo(codigo:number):Promise<boolean>
}
