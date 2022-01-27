import { EquipoDto } from './equipo.dto';
import { ApiProperty } from '@nestjs/swagger';
export class EquipoFiltradoDto {
  @ApiProperty({description:'numero actual de la pagina'})
  page:number

  @ApiProperty({description:'Numero total de equipos'})
  total:number

  @ApiProperty({description:'Equipos por pagina'})
  data:EquipoDto[]
}