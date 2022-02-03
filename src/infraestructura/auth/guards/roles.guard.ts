import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { Role } from 'src/infraestructura/usuario/roles/role.enum';
import { ROLES_KEY } from '../decorator/roles.decorator';
import { UsuarioEntidad } from '../../usuario/entidad/usuario.entidad';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector:Reflector){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<Role[]>(ROLES_KEY,context.getHandler())
    // const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
    //   context.getHandler(),
    //   context.getClass(),
    // ]);
    //console.log(requiredRoles);
    if(!roles){
      return true
    }
    const request = context.switchToHttp().getRequest<Request>()
    const user = request.user as UsuarioEntidad
    const hasRole = roles.includes(user.role);
    if(!hasRole){
      throw new ForbiddenException('No estas autorizado')
    }
    return hasRole
  }
}
