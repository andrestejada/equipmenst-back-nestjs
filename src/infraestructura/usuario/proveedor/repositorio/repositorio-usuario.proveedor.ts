import { RepositorioUsuario } from 'src/dominio/usuario/puerto/repositorio/repositorio-usuario';
import { RepositorioUsuarioPostgres } from 'src/infraestructura/usuario/adaptador/repositorio/repositorio-usuario-posgrest';

export const repositorioUsuarioProvider = {
  provide: RepositorioUsuario,
  useClass: RepositorioUsuarioPostgres,
};
