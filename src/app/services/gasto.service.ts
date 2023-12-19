// gasto.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gasto } from '../models/gasto.model';

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  private apiUrl = 'http://localhost:8080/ttps-spring/gastos'; // Ruta base de la API de gastos

  constructor(private http: HttpClient) { }

  crearGasto(gasto: Gasto): Observable<any> {
    const headers = new HttpHeaders()
    .set('nombre', gasto.nombre)
    .set('monto', gasto.monto);
    
    const url = `${this.apiUrl}`;
    return this.http.post<any>(url, null, { headers });

  }
}
