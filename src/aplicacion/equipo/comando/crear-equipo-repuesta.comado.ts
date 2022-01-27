import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNumber, IsString ,IsDateString } from 'class-validator';

@Expose()
export class ComandoCrearEquipoRespuesta {
  @Expose()
  @IsNumber()
  @ApiProperty({ example: 1 })
  id:number

  @Expose()
  @IsNumber()
  @ApiProperty({ example: 123 })
  codigo: number;

  @Expose()
  @IsString()
  @ApiProperty({ example: 'descripcion del equipo' })
  descripcion: string;

  @Expose()
  @IsString()
  @ApiProperty({ example: 'Laboratorio' })
  ubicacion: string;

  @Expose()
  @IsDateString()
  @ApiProperty({example:'2022-01-18T19:38:54.000Z'})
  fechaMantenimiento: string
}
