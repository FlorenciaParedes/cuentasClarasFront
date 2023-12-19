// gasto.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gasto } from '../models/gasto.model';
import { Usuario } from '../component/usuario-form/usuario';

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  private apiUrl = 'http://localhost:8080/ttps-spring/'; // Ruta base de la API de gastos
  usuarios: any[] = [];
  constructor(private http: HttpClient) { }

  crearGasto(gasto: Gasto): Observable<any> {
    const headers = new HttpHeaders()
    .set('nombre', gasto.nombre)
    .set('monto', gasto.monto)
    .set('usuarioOrigenId', gasto.usuarioOrigenId);
    
    const url = `${this.apiUrl}gastos`;
    return this.http.post<any>(url, null, { headers });
  }
  
  listarUsuarios(): Observable<any> {
    const url = `${this.apiUrl}usuarios/listarTodos`;
    return this.http.get<any>(url);
    
  }
}
