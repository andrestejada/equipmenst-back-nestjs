import { DaoEquipo } from '../../../../dominio/equipo/puerto/dao/DaoProducto';
import { DaoEquipoPostgres } from '../../adaptador/dao/dao-equipo-postgres';
export const daoEquipoProvider ={
  provide: DaoEquipo,
  useClass:DaoEquipoPostgres
}