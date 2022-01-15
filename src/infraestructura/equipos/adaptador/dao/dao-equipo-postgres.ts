import { Injectable } from '@nestjs/common';
import { EquipoDto } from 'src/aplicacion/equipo/consulta/dto/equipo.dto';
import { DaoEquipo } from 'src/dominio/equipo/puerto/dao/DaoProducto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Equipo } from '../../../../dominio/equipo/modelo/equipo';

@Injectable()
export class DaoEquipoPostgres implements DaoEquipo {
  constructor(
    @InjectEntityManager()
    private entityManager: EntityManager,
  ) {}
  async obtenerTodo(): Promise<EquipoDto[]> {
    return this.entityManager.find<EquipoDto>(Equipo)
  }
}
