import { Injectable } from '@nestjs/common';
import { DaoEquipo } from '../../../dominio/equipo/puerto/dao/DaoEquipo';
import { PaginadorDto } from './dto/PaginadorDto';
import { EquipoFiltradoDto } from './dto/EquiposFiltradosDto';

@Injectable()
export class ManjeadorPaginarEquipos {
  constructor(private daoEquipo: DaoEquipo) { } 
  ejecutar(querys:PaginadorDto): Promise<EquipoFiltradoDto> {
    return this.daoEquipo.filtrarEquipos(querys);
  }
}
