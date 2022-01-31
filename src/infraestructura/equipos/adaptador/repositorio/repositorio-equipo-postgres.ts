import { Injectable, NotFoundException } from '@nestjs/common';
import { Equipo } from 'src/dominio/equipo/modelo/equipo';
import { RepositorioEquipo } from '../../../../dominio/equipo/puerto/repositorio/repositorio-equipo';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EquipoEntidad } from '../../entidad/equipo.entidad';
import { plainToClass } from 'class-transformer';
import { EquipoEditadoDto } from '../../../../aplicacion/equipo/consulta/dto/EquipoEditadoDto';
import { EquipoCreadoDto } from '../../../../aplicacion/equipo/consulta/dto/EquipoCreadoDto';

@Injectable()
export class RepositorioEquipoPostgres implements RepositorioEquipo {
  constructor(
    @InjectRepository(EquipoEntidad)
    private repositorio: Repository<EquipoEntidad>,
  ) {}

  async existeCodigoEquipo(codigo: number): Promise<boolean> {
    const resp = await this.repositorio.findOne({codigo});
    if(!resp) return false
    return true
  }

  async editarEquipo(id: number, equipo: Partial<Equipo>): Promise<EquipoEditadoDto> {
    const resp = await this.repositorio
      .createQueryBuilder()
      .update(equipo)
      .where('id=:id', { id })
      .returning('*')
      .execute();
    if (!resp.affected) {
      throw new NotFoundException(`El id "${id}" no fue encontrado`);
    }
    const equipoEditado = resp.raw[0]
    return equipoEditado
  }

  async crearEquipo(equipo: Equipo): Promise<EquipoCreadoDto> {
    const entidad = this.repositorio.create(equipo);
    await this.repositorio.save(entidad);
    const respuesta = plainToClass(EquipoCreadoDto, entidad);
    respuesta.usuarioId = entidad.usuario.id
    return respuesta;
  }

  async eliminarEquipo(id: number): Promise<void> {
    const existe = await this.repositorio.delete(id);
    if (!existe.affected) {
      throw new NotFoundException(`El id "${id}" no fue encontrado`);
    }
  }
}
