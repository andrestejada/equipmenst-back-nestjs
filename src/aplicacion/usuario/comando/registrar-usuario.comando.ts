import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ComandoRegistrarUsuario {

  @IsString()
  @ApiProperty({ example: 'Andres'})
  public nombre: string;

  @IsString()
  @ApiProperty({ example: 'Tejada'})
  public apellido: string;

  @IsEmail()
  @ApiProperty({ example: 'correo@correo.com'})
  public correo: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @ApiProperty({ minLength: 6, example: '123456' })
  public clave: string;
  
}
