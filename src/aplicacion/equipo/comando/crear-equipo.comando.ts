import { number } from '@hapi/joi';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString ,IsDateString, IsNotEmpty, IsPositive } from 'class-validator';
export class ComandoCrearEquipo {
  @IsNumber()
  @ApiProperty({ example: 123 })
  codigo: number;

  @IsString()
  @ApiProperty({ example: 'descripcion del equipo' })
  descripcion: string;

  @IsString()
  @ApiProperty({ example: 'Laboratorio' })
  ubicacion: string;

  @IsDateString({message:'Debe ser una fehca en formato valido'})
  @ApiProperty({example:'2022-01-18T19:38:54.000Z',type:Date})
  fechaMantenimiento: string


  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({example:'123',type:number})
  usuarioId:number
}
