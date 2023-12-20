
import { Component } from '@angular/core';
import { Grupo } from '../../models/grupo.model';
import { GruposService } from '../../services/grupos.service'; 
import { Gasto } from '../../models/gasto.model';
@Component({
  selector: 'app-gastos-por-grupos',
  templateUrl: './gastos-por-grupos.component.html',
  styleUrl: './gastos-por-grupos.component.css'
})
export class GastosPorGruposComponent {
  grupos: Grupo[] = [];
  grupoSeleccionado: Grupo| null = null;
  gastos: Gasto[] = [];

  constructor(private grupoService: GruposService) {} // Inyecta el servicio en el constructor
  
  ngOnInit() {
    this.cargarGrupos(); 
  }


  cargarGrupos() {
    this.grupoService.listarGrupos().subscribe(
      (grupos: Grupo[]) => {
        this.grupos = grupos;
      },
      (error) => {
        console.error('Error al cargar los grupos', error);
      }
    );
    }
    
    onSubmit() {
    if (this.grupoSeleccionado) {
      console.log(this.grupoSeleccionado.id);
      this.cargarGastos(this.grupoSeleccionado.id);
    }
  }

  cargarGastos(idGrupo: number) {
    console.log("dentro de cargar gasto",idGrupo);
    this.grupoService.obtenerGastos(idGrupo).subscribe(
      (gastos: Gasto[]) => {
        this.gastos = gastos;
        console.log('Gastos obtenidos:', this.gastos);
      },
      (error) => {
        console.error('Error al cargar los gastos', error);
      }
    );
    }
  }