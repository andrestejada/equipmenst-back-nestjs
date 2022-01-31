
export class Usuario {
  readonly #nombre: string;
  readonly #apellido: string;
  readonly #correo: string;
  readonly #clave: string;

  constructor(nombre: string, apellido:string ,correo:string , clave: string) {
    this.#nombre = nombre;
    this.#apellido  = apellido  
    this.#correo  = correo
    this.#clave = clave;
  }


  get nombre(): string {
    return this.#nombre;
  }

  get clave(): string {
    return this.#clave;
  }

  get apellido():string{
    return this.#apellido
  }

  get correo():string{
    return this.#correo
  }

  
}
