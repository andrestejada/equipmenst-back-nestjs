import { RepositorioUsuario } from '../puerto/repositorio/repositorio-usuario';
import { Usuario } from '../modelo/usuario';
import { ErrorDeNegocio } from 'src/dominio/errores/error-de-negocio';

export class ServicioRegistrarUsuario {

  constructor(private readonly _repositorioUsuario: RepositorioUsuario) {
  }

  async ejecutar(usuario: Usuario) {
    if (await this._repositorioUsuario.existeCorreo(usuario.correo)) {
      throw new ErrorDeNegocio(
        `El correo  ${usuario.correo} ya existe`,
      );
    }
    return await this._repositorioUsuario.guardar(usuario);
  }
}
