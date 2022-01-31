import { RepositorioUsuario } from 'src/dominio/usuario/puerto/repositorio/repositorio-usuario';
import { Usuario } from 'src/dominio/usuario/modelo/usuario';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntidad } from '../../entidad/usuario.entidad';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UsuarioDto } from 'src/aplicacion/usuario/consulta/dto/usuario.dto';
import { plainToClass } from 'class-transformer';
import * as bycrypt from 'bcrypt'

@Injectable()
export class RepositorioUsuarioPostgres implements RepositorioUsuario {
  constructor(
    @InjectRepository(UsuarioEntidad)
    private readonly repositorio: Repository<UsuarioEntidad>,
  ) {}

  async obtenerPorId(id: number): Promise<Usuario> {
    const usuario = await this.repositorio.findOne(id);       
    return plainToClass(Usuario,usuario)
  }

  async existeCorreo(correo: string): Promise<boolean> {
    const existe = await this.repositorio.findOne({correo})
    if(existe){
      return true
    }
    return false
  }

  async guardar(usuario: Usuario): Promise<UsuarioDto> {
    const entidad = this.repositorio.create(usuario)
    const hashPasword = await bycrypt.hash(usuario.clave,10)
    entidad.clave = hashPasword;
    await this.repositorio.save(entidad)
    const usuarioResp = plainToClass(UsuarioDto,entidad)
    return usuarioResp
  }

}
