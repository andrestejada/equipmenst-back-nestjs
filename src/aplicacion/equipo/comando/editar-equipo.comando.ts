import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class ComandoEditarEquipo {
  @IsNumber()
  @IsOptional()
  @ApiProperty({ example: 123 })
  codigo: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'descripcion del equipo' })
  descripcion: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Laboratorio' })
  ubicacion: string;

  @IsDateString()
  @IsOptional()
  @ApiProperty({example:'2022-01-18T19:38:54.000Z'})
  fechaMantenimiento: Date
}