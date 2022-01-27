import { ServicioEliminarEquipo } from '../../../../dominio/equipo/servicio/servicio-elimar-equipo';
import { RepositorioEquipo } from '../../../../dominio/equipo/puerto/repositorio/repositorio-equipo';
export const servicioEliminarEquipoProveedor =(repositorioEquipo:RepositorioEquipo)=>{
  return new ServicioEliminarEquipo(repositorioEquipo)
}