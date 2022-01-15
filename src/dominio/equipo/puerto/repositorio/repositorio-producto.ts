import { Equipo } from '../../modelo/equipo';

export abstract class RepositorioEquipo {
  abstract obtenerTodos(): Promise<Equipo>;
}
