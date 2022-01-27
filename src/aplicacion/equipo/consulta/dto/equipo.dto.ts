import { ApiProperty } from "@nestjs/swagger";
export class EquipoDto {
  @ApiProperty({ example: 123 })
  id: number;
  @ApiProperty({ example: 'Televisor' })
  descripcion: string;
  @ApiProperty({ example: 'Oficina' })
  ubicacion: string;
}
