import { Controller, Post, Req,  UseGuards } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from '../service/authService';
import { UsuarioEntidad } from '../../usuario/entidad/usuario.entidad';
import { LocalAuthGuard } from '../guards/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService:AuthService){}
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Req() req:Request){
    const user = req.user as UsuarioEntidad
    return this.authService.login(user)
  }
}