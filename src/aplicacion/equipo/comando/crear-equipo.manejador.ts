import { Injectable } from '@nestjs/common';
import { Equipo } from 'src/dominio/equipo/modelo/equipo';
import { ServicioCrearEquipo } from '../../../dominio/equipo/servicio/servicio-crear-equipo';
import { ComandoCrearEquipo } from './crear-equipo.comando';
import { RepositorioUsuario } from '../../../dominio/usuario/puerto/repositorio/repositorio-usuario';
import { EquipoCreadoDto } from '../consulta/dto/EquipoCreadoDto';
@Injectable()
export class ManejadorCrearEquipo {
  constructor(
    private servicioCrearEquipo: ServicioCrearEquipo,
    private repositoriousuario: RepositorioUsuario,
  ) {}

  async ejecutar(
    comandoCrearEquipo: ComandoCrearEquipo,
  ): Promise<EquipoCreadoDto> {
    return await this.servicioCrearEquipo.ejecutar(
      new Equipo(
        comandoCrearEquipo.codigo,
        comandoCrearEquipo.descripcion,
        comandoCrearEquipo.ubicacion,
        comandoCrearEquipo.fechaMantenimiento,
        await this.repositoriousuario.obtenerPorId(comandoCrearEquipo.usuarioId),
      ),
    );
  }
}
