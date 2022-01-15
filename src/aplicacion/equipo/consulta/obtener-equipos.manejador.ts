import { Injectable } from '@nestjs/common';
import { DaoEquipo } from '../../../dominio/equipo/puerto/dao/DaoProducto';
import { EquipoDto } from './dto/equipo.dto';

@Injectable()
export class ManjeadorObtenerEquipos {
  constructor(private daoEquipo: DaoEquipo) {}

  ejecutar(): Promise<EquipoDto[]> {
    return this.daoEquipo.obtenerTodo();
  }
}
