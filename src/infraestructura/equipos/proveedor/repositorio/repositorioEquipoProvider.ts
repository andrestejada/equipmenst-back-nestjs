import { RepositorioEquipo } from '../../../../dominio/equipo/puerto/repositorio/repositorio-equipo';
import { RepositorioEquipoPostgres } from '../../adaptador/repositorio/repositorio-equipo-postgres';
export const repositorioEquipoProvider={
  provide:RepositorioEquipo,
  useClass:RepositorioEquipoPostgres
}