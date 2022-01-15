export class Equipo {
  readonly #codigo: number;
  readonly #descripcion: string;
  readonly #ubicacion: string;

  constructor(codigo:number,descripcion:string,ubicacion:string) {
    this.#codigo =codigo;
    this.#descripcion=descripcion;
    this.#ubicacion=ubicacion;
  }
}
