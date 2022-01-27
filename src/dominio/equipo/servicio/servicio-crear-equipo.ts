import { RepositorioEquipo } from '../puerto/repositorio/repositorio-equipo';
import { Equipo } from '../modelo/equipo';
import { ComandoCrearEquipoRespuesta } from '../../../aplicacion/equipo/comando/crear-equipo-repuesta.comado';
import { ErrorDeNegocio } from 'src/dominio/errores/error-de-negocio';
export class ServicioCrearEquipo {
  constructor(private repositorioEquipo:RepositorioEquipo){}

  async ejecutar(equipo:Equipo):Promise<ComandoCrearEquipoRespuesta>{
    if(await this.repositorioEquipo.existeCodigoEquipo(equipo.codigo)){
      throw new ErrorDeNegocio(`El codigo ${equipo.codigo} ya existe intenta con otro`)
    }
    return await this.repositorioEquipo.crearEquipo(equipo)
  }
}