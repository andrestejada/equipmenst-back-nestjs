import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from '../service/authService';
import { ConfigService } from '@nestjs/config';
import { EnvVariables } from '../../configuracion/environment/env-variables.enum';
import { PayloadToken } from '../interfaces/payload';

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy,'jwt') {
  constructor(private configService:ConfigService){
    super({
      jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration:false,
      secretOrKey:configService.get(EnvVariables.JWT_SECRET_KEY)
    })
  }

  validate(payload:PayloadToken){
    return{ sub:payload.sub, nombre:payload.nombre ,role:payload.role}
  }
}