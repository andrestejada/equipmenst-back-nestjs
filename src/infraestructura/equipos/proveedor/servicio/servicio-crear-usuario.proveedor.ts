import { RepositorioEquipo } from 'src/dominio/equipo/puerto/repositorio/repositorio-equipo';
import { ServicioCrearEquipo } from '../../../../dominio/equipo/servicio/servicio-crear-equipo';

export function servicioCrearEquipoProveedor(repositorioEquipo:RepositorioEquipo){
  return new ServicioCrearEquipo(repositorioEquipo)
}

