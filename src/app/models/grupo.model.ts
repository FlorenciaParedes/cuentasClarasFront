// grupo.model.ts
import { CategoriaGrupo } from "./categoriaGrupo.model";

export class Grupo {
  
  public nombre: string;
  public fecha: string;
  public categoria: CategoriaGrupo; 

  constructor(
    nombre: string,
    fecha: string,
    categoria: CategoriaGrupo,
  ) {  
    this.nombre = nombre;    
    this.fecha = fecha;
    this.categoria = categoria;
  }
}
