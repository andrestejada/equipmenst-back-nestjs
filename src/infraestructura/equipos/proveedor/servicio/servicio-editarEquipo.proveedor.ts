import { ServicioEditarEquipo } from '../../../../dominio/equipo/servicio/servicio-editarEquipo';
import { RepositorioEquipo } from '../../../../dominio/equipo/puerto/repositorio/repositorio-equipo';

export const servicioEditarEquipoProveedor =(respositorioEquipo: RepositorioEquipo)=>{
  return new ServicioEditarEquipo(respositorioEquipo)
}