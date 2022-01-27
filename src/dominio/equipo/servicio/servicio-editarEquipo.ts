import { RepositorioEquipo } from '../puerto/repositorio/repositorio-equipo';
import { Equipo } from '../modelo/equipo';
export class ServicioEditarEquipo {
  constructor(private respositorioEquipo: RepositorioEquipo){}

  async ejecutar(id: number, equipo: Partial<Equipo>){
    return await this.respositorioEquipo.editarEquipo(id,equipo)
  }
}