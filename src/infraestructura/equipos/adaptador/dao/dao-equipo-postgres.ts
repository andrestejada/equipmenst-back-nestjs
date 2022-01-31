import { Injectable } from '@nestjs/common';
import { DaoEquipo } from 'src/dominio/equipo/puerto/dao/DaoEquipo';
import { InjectRepository } from '@nestjs/typeorm';
import { EquipoEntidad } from '../../entidad/equipo.entidad';
import { Repository } from 'typeorm';
import { PaginadorDto } from 'src/aplicacion/equipo/consulta/dto/PaginadorDto';
import { EquipoFiltradoDto } from '../../../../aplicacion/equipo/consulta/dto/EquiposFiltradosDto';
import { ObtenerEquiposDto } from '../../../../aplicacion/equipo/consulta/dto/ObtenerEquiposDto';

@Injectable()
export class DaoEquipoPostgres implements DaoEquipo {
  constructor(
    @InjectRepository(EquipoEntidad)
    private repositorio: Repository<EquipoEntidad>,
  ) {}

  async filtrarEquipos(querys: PaginadorDto): Promise<EquipoFiltradoDto> {
    const {limit,page} = querys;
    const skip = page - 1 || 0;
    const take = limit || 3;
    const [equipos,count] = await this.repositorio.findAndCount({skip,take,relations:['usuario']});    
    return {
      total:count,
      page:skip+1,
      data:equipos,
    }
  }
  async obtenerTodo(): Promise<ObtenerEquiposDto[]> {
    const entidad = await this.repositorio.find({relations:['usuario']});
    const resp = entidad.map((equipo)=> new ObtenerEquiposDto(equipo))
    return resp
  }
}
