import { RepositorioEquipo } from '../../src/dominio/equipo/puerto/repositorio/repositorio-equipo';
import { DaoEquipo } from '../../src/dominio/equipo/puerto/dao/DaoEquipo';
export const repositorioEquipo:RepositorioEquipo = {
  crearEquipo: jest.fn(),
  eliminarEquipo:jest.fn(),
  editarEquipo:jest.fn(),
  existeCodigoEquipo:jest.fn()
};

export const daoEquipo: DaoEquipo = {
  obtenerTodo: jest.fn(),
  filtrarEquipos:jest.fn(),
};