import { Injectable } from '@nestjs/common';
import { ServicioEditarEquipo } from '../../../dominio/equipo/servicio/servicio-editarEquipo';
import { ComandoEditarEquipo } from './editar-equipo.comando';
import { Equipo } from '../../../dominio/equipo/modelo/equipo';

@Injectable()
export class ManejadorEditarEquipo {
  constructor(private servicioEditarEquipo: ServicioEditarEquipo) {}

  async ejecutar(id: number, comandorEditarEquipo: ComandoEditarEquipo) {
    return await this.servicioEditarEquipo.ejecutar(id, comandorEditarEquipo);
  }
}
