// gasto.model.ts

export class Gasto {
  public nombre: string;
  public monto: string;
  // public fecha: string;
  // public categoriaId: number; // Suponiendo que la categoría se identifica por su ID
  public usuarioOrigenId: string; // Suponiendo que el usuario se identifica por su ID

  constructor(
    nombre: string,
    monto: string,
    // fecha: string,
    // categoriaId: number,
    usuarioOrigenId: string
  ) {
    this.nombre = nombre;    
    this.monto = monto;
    // this.fecha = fecha;
    // this.categoriaId = categoriaId;
    this.usuarioOrigenId = usuarioOrigenId;
  }
}
