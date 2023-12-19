// gasto.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gasto } from '../models/gasto.model';
import { Usuario } from '../models/usuario.model';
import { CategoriaGasto } from '../models/categoriaGasto.model';

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  private apiUrl = 'http://localhost:8080/ttps-spring/'; // Ruta base de la API de gastos
  //categorias: any[] = [];
  //usuarios: any[] = [];
  categorias: CategoriaGasto[] = [];
  usuarios: Usuario[] = [];
  constructor(private http: HttpClient) { }

  crearGasto(gasto: Gasto): Observable<any> {
    const headers = new HttpHeaders()
    .set('nombre', gasto.nombre)
    .set('monto', gasto.monto)
    .set('categoriaId', gasto.categoria.nombre)
    .set('usuarioOrigenId', gasto.usuarioOrigen.nombreUsuario);
    
    const url = `${this.apiUrl}gastos`;
    return this.http.post<any>(url, null, { headers });
  }
  
  listarCategorias(): Observable<any> {
    const url = `${this.apiUrl}gastos/listarCategorias`;
    return this.http.get<any>(url);
  }
  listarUsuarios(): Observable<any> {
    const url = `${this.apiUrl}usuarios/listarTodos`;
    return this.http.get<any>(url);
  }

  // crearGasto(gasto: Gasto): Observable<any> {

  //   const url = `${this.apiUrl}gastos`;
  //   return this.http.post<any>(url, gasto);
  // } probe esto que me decia chat que sino hiciera pero nop
}
