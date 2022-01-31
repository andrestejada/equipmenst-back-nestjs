import { Usuario } from '../../modelo/usuario';
import { UsuarioDto } from '../../../../aplicacion/usuario/consulta/dto/usuario.dto';

export abstract class RepositorioUsuario {
  abstract existeCorreo(correo: string): Promise<boolean>;
  abstract obtenerPorId(id:number):Promise<Usuario>
  abstract guardar(usuario: Usuario):Promise<UsuarioDto>;
}
