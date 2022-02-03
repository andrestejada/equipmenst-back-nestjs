import { Usuario } from '../../modelo/usuario';
import { UsuarioDto } from '../../../../aplicacion/usuario/consulta/dto/usuario.dto';
import { UsuarioEntidad } from '../../../../infraestructura/usuario/entidad/usuario.entidad';

export abstract class RepositorioUsuario {
  abstract existeCorreo(correo: string): Promise<boolean>;
  abstract obtenerPorId(id:number):Promise<Usuario>
  abstract obtenerPorEmail(email:string):Promise<UsuarioEntidad>
  abstract guardar(usuario: Usuario):Promise<UsuarioDto>;
}
