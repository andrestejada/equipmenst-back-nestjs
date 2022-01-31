import { RepositorioEquipo } from '../puerto/repositorio/repositorio-equipo';
import { Equipo } from '../modelo/equipo';
import { ErrorDeNegocio } from 'src/dominio/errores/error-de-negocio';
import { EquipoCreadoDto } from '../../../aplicacion/equipo/consulta/dto/EquipoCreadoDto';
export class ServicioCrearEquipo {
  constructor(private repositorioEquipo:RepositorioEquipo){}

  async ejecutar(equipo:Equipo):Promise<EquipoCreadoDto>{
    if(await this.repositorioEquipo.existeCodigoEquipo(equipo.codigo)){
      throw new ErrorDeNegocio(`El codigo ${equipo.codigo} ya existe intenta con otro`)
    }
    return await this.repositorioEquipo.crearEquipo(equipo)
  }
}