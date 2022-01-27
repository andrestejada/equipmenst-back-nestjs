import { Injectable } from "@nestjs/common";
import { ServicioEliminarEquipo } from '../../../dominio/equipo/servicio/servicio-elimar-equipo';

@Injectable()

export class ManejadorEliminarEquipo{
  constructor(private servicioElimanarEquipo: ServicioEliminarEquipo){}

  async ejecutar(id:number){
    await this.servicioElimanarEquipo.ejecutar(id)
  }
}