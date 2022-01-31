import { ApiProperty } from "@nestjs/swagger";
import { Expose, Transform ,Type } from "class-transformer";
import { UsuarioEntidad } from '../../../../infraestructura/usuario/entidad/usuario.entidad';
import { EquipoEntidad } from '../../../../infraestructura/equipos/entidad/equipo.entidad';

export class ObtenerEquiposDto {

  @ApiProperty({ example: 123 })
  @Expose()
  id: number;

  @Expose()
  codigo:number

  @ApiProperty({ example: 'Televisor' })
  @Expose()
  descripcion: string;

  @Expose()
  @ApiProperty({ example: 'Oficina' })
  ubicacion: string;

  @Expose()
  fechaMantenimiento:string;
  
  @Expose({name:'usuarioId'})     
  @Type(()=>UsuarioEntidad)
  @Transform(({id}:UsuarioEntidad)=>id)
  usuario:number

  constructor(partial: Partial<EquipoEntidad>) {
    Object.assign(this, partial);
  }

}
