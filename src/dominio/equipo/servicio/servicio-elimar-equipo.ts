import { RepositorioEquipo } from '../puerto/repositorio/repositorio-equipo';
export class ServicioEliminarEquipo {
  constructor(private repositorioEquipo:RepositorioEquipo){}

  async ejecutar(id:number){
    await this.repositorioEquipo.eliminarEquipo(id)
  }
}