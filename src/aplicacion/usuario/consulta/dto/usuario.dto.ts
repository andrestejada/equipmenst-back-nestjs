import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsNumber } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';


@Exclude()
export class UsuarioDto {

  @ApiProperty({example:1113532})
  @IsNumber()
  @Expose()
  id:number

  @IsString()
  @ApiProperty({ example: 'Andres'})
  @Expose()
  public nombre: string;

  @IsString()
  @ApiProperty({ example: 'Tejada'})
  @Expose()
  public apellido: string;

  @IsEmail()
  @ApiProperty({ example: 'correo@correo.com'})
  @Expose()
  public correo: string;
    
}
