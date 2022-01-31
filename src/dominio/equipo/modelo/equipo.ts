import { Usuario } from 'src/dominio/usuario/modelo/usuario';
import { ErrorDeNegocio } from '../../errores/error-de-negocio';
export class Equipo {
  readonly #codigo: number;
  readonly #descripcion: string;
  readonly #ubicacion: string;
  readonly #fechaMantenimiento: Date;
  readonly #usuario: Usuario;

  constructor(codigo:number,descripcion:string,ubicacion:string,fechaMantenimiento:string,usuario:Usuario) {
    this.usuarioExiste(usuario);
    this.esFinDeSemana(fechaMantenimiento)
    this.#usuario=usuario
    this.#codigo =codigo;
    this.#descripcion=descripcion;
    this.#ubicacion=ubicacion;
    this.#fechaMantenimiento= new Date(fechaMantenimiento)
  }

  usuarioExiste(usuario:Usuario){
    if(!usuario){
      throw new ErrorDeNegocio('El usuario con ese id no existe')
    }
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

  get usuario(){
    return this.#usuario
  }
}
