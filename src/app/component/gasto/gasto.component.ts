import { Component, OnInit } from '@angular/core';
import { GastoService } from '../../services/gasto.service';
import { Gasto } from '../../models/gasto.model';
import { forkJoin } from 'rxjs';
import { Usuario } from '../../models/usuario.model'; 
import { CategoriaGasto } from '../../models/categoriaGasto.model';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrl: './gasto.component.css'
})
export class GastoComponent {
  modoEdicion = false;
nuevoGasto: Gasto = new Gasto('', '','',new CategoriaGasto(''),new Usuario('','','','',''));

categorias: CategoriaGasto[] = [];
usuarios: Usuario[] = [];
errorMessage: string = '';
gastoId: string= '';

constructor(private gastoService: GastoService) { }

onSubmit(): void {
  if (this.modoEdicion) {
    // Si estamos en modo edición, llamamos al método editarGasto()
    this.editarGasto();
  } else {
    // Si no, estamos en modo creación, llamamos al método crearGasto()
    this.crearGasto();
  }
}
private crearGasto(): void {
  this.gastoService.crearGasto(this.nuevoGasto).subscribe(
    (response) => {
      this.gastoId = response.id;
      this.modoEdicion = true; // Cambiamos al modo de edición después de crear el gasto
    },
    (error) => {
      console.error('Error al registrar gasto:', error);
      if (error.status === 400) {
        this.errorMessage = 'La solicitud es inválida. Verifica los parámetros.';
        console.log('Respuesta de error:', error?.error);
      } else if (error.status === 500) {
        console.log('Respuesta de error:', error?.error);
        this.errorMessage = 'Error del servidor. Inténtalo nuevamente.';
      }
      console.log(this.errorMessage);
      console.log('Respuesta de error:', error?.error);
    }
  );
}
  editarGasto(): void {
    console.log(this.gastoId);
    this.gastoService.actualizarGasto(this.gastoId, this.nuevoGasto).subscribe(
      (response) => {
        console.log('Gasto actualizado correctamente', response);
      },
      (error) => {
        console.error('Error al actualizar el gasto:', error);
      }
    );  
  }

ngOnInit() {
  forkJoin({
    categorias: this.gastoService.listarCategorias(),
    usuarios: this.gastoService.listarUsuarios()
  }).subscribe({
    next: (result: any) => {
      if (result && result.categorias && Array.isArray(result.categorias)) {
        this.categorias = result.categorias;
      }
      if (result && result.usuarios && Array.isArray(result.usuarios)) {
        this.usuarios = result.usuarios;
      }
    },
    error: (error: any) => {
      console.error('Error al cargar usuarios y categorías:', error);
    }
  });
}
}
