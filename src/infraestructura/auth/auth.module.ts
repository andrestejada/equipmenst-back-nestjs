import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controladores/auth.Controlador';
import { AuthService } from './service/authService';
import { LocalStrategy } from './strategies/local.strategy';
import { UsuarioProveedorModule } from '../usuario/proveedor/usuario-proveedor.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvVariables } from '../configuracion/environment/env-variables.enum';
import { JWTStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [PassportModule, JwtModule.registerAsync({
    imports:[ConfigModule],
    inject:[ConfigService],
    useFactory: async (configService:ConfigService)=>({
      secret:configService.get(EnvVariables.JWT_SECRET_KEY),
      signOptions:{
        expiresIn: configService.get(EnvVariables.JWT_EXPIRATION_TIME)
      }
    })
    // secret:process.env.JWT_SECRET_KEY,
    // signOptions:{
    //   expiresIn:'2h'
    // }
  }), UsuarioProveedorModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy,JWTStrategy],
})
export class AuthModule {}
