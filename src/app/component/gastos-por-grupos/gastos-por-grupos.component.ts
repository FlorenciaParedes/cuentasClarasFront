
import { Component } from '@angular/core';
import { Grupo } from '../../models/grupo.model';
import { GruposService } from '../../services/grupos.service'; 
@Component({
  selector: 'app-gastos-por-grupos',
  templateUrl: './gastos-por-grupos.component.html',
  styleUrl: './gastos-por-grupos.component.css'
})
export class GastosPorGruposComponent {
  grupos: Grupo[] = [];
  grupoSeleccionado: Grupo| null = null;
  constructor(private grupoService: GruposService) {} // Inyecta el servicio en el constructor
  
  ngOnInit() {
    this.cargarGrupos(); // Llama a la función que realiza la petición en el ngOnInit
  }

  onSubmit(){
    console.log("estoy harta");
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
  }