import { DaoEquipo } from '../../../../dominio/equipo/puerto/dao/DaoEquipo';
import { DaoEquipoPostgres } from '../../adaptador/dao/dao-equipo-postgres';
export const daoEquipoProvider ={
  provide: DaoEquipo,
  useClass:DaoEquipoPostgres
}