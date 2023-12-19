// gasto.model.ts
import { Usuario } from "./usuario.model";
import { CategoriaGasto } from "./categoriaGasto.model";

export class Gasto {
  public nombre: string;
  public monto: string;
  public fecha: string;
  // public categoriaId: string; // Suponiendo que la categoría se identifica por su ID
  // public usuarioOrigenId: string; // Suponiendo que el usuario se identifica por su ID
  public categoria: CategoriaGasto; // Objeto completo de CategoriaGasto
  public usuarioOrigen: Usuario;


  constructor(
    nombre: string,
    monto: string,
    fecha: string,
    categoria: CategoriaGasto,
    usuarioOrigen: Usuario,
  ) {
    this.nombre = nombre;    
    this.monto = monto;
    this.fecha = fecha;
    this.categoria = categoria;
    this.usuarioOrigen = usuarioOrigen;
  }
}
