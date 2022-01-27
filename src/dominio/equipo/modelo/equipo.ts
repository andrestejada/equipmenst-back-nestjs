import { ErrorDeNegocio } from '../../errores/error-de-negocio';
export class Equipo {
  readonly #codigo: number;
  readonly #descripcion: string;
  readonly #ubicacion: string;
  readonly #fechaMantenimiento: Date;

  constructor(codigo:number,descripcion:string,ubicacion:string,fechaMantenimiento:string) {
    this.esFinDeSemana(fechaMantenimiento)
    this.#codigo =codigo;
    this.#descripcion=descripcion;
    this.#ubicacion=ubicacion;
    this.#fechaMantenimiento= new Date(fechaMantenimiento)
  }

  esFinDeSemana(date:string){
    const saturday =6 ;
    const sunday = 0;
    const dayOfWeekeen = saturday | sunday ;
    const currentDate = new Date(date);    
    if(currentDate.getDay() === dayOfWeekeen){   
        throw new ErrorDeNegocio(`La fecha ${date} no es un dia habil mantenimiento(L-V)`)
    }
};

  get codigo(){
    return this.#codigo
  }

  get descripcion(){
    return this.#descripcion
  }

  get ubicacion(){
    return this.#ubicacion
  }

  get fechaMantenimiento(){
    return this.#fechaMantenimiento
  }
}
