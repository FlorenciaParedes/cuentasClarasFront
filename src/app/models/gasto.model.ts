// gasto.model.ts
import { Usuario } from "./usuario.model";
import { CategoriaGasto } from "./categoriaGasto.model";

export class Gasto {
  public id: string;
  public nombre: string;
  public monto: string;
  public fecha: string;
  public categoria: CategoriaGasto; 
  public usuarioOrigen: Usuario;
  constructor(
    id:string,
    nombre: string,
    monto: string,
    fecha: string,
    categoria: CategoriaGasto,
    usuarioOrigen: Usuario,
  ) {
    this.id = id;
    this.nombre = nombre;    
    this.monto = monto;
    this.fecha = fecha;
    this.categoria = categoria;
    this.usuarioOrigen = usuarioOrigen;
  }
}
