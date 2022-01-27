import { Injectable } from '@nestjs/common';
import { Equipo } from 'src/dominio/equipo/modelo/equipo';
import { ServicioCrearEquipo } from '../../../dominio/equipo/servicio/servicio-crear-equipo';
import { ComandoCrearEquipo } from './crear-equipo.comando';
import { ComandoCrearEquipoRespuesta } from './crear-equipo-repuesta.comado';
@Injectable()
export class ManejadorCrearEquipo {
  constructor(private servicioCrearEquipo: ServicioCrearEquipo) {}

  ejecutar(
    comandoCrearEquipo: ComandoCrearEquipo,
  ): Promise<ComandoCrearEquipoRespuesta> {
    return this.servicioCrearEquipo.ejecutar(
      new Equipo(
        comandoCrearEquipo.codigo,
        comandoCrearEquipo.descripcion,
        comandoCrearEquipo.ubicacion,
        comandoCrearEquipo.fechaMantenimiento,
      ),
    );
  }
}
