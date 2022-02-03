import { Injectable } from '@nestjs/common';
import { RepositorioUsuario } from '../../../dominio/usuario/puerto/repositorio/repositorio-usuario';
import * as bycrypt from 'bcrypt';
import { plainToClass } from 'class-transformer';
import { LoginExitosoDto } from '../dto/loginExitosoDto';
import { JwtService } from '@nestjs/jwt';
import { UsuarioEntidad } from '../../usuario/entidad/usuario.entidad';
import { PayloadToken } from '../interfaces/payload';

@Injectable()
export class AuthService {
  constructor(
    private repositorioUsuario: RepositorioUsuario,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const usuario = await this.repositorioUsuario.obtenerPorEmail(email);
    const isMatch = await bycrypt.compare(password, usuario.clave);
    if (isMatch) {
      return usuario
    }
    return null;
  }

  async login(user:UsuarioEntidad) {    
    const payload:PayloadToken = {sub:user.id,nombre:user.nombre,role:user.role};
    const usuario = plainToClass(LoginExitosoDto,user,{excludeExtraneousValues:true})
    return {
      accessToken:this.jwtService.sign(payload),
      usuario
    }
  }
}
