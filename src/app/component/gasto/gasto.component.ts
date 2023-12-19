import { Component } from '@angular/core';
import { GastoService } from '../../services/gasto.service';
import { Gasto } from '../../models/gasto.model';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrl: './gasto.component.css'
})
export class GastoComponent {

  nuevoGasto: Gasto = new Gasto('',''); // Instancia de un nuevo gasto

  constructor(private gastoService: GastoService) { }

  onSubmit(): void {
    this.gastoService.crearGasto(this.nuevoGasto).subscribe(
      (response) => {
        console.log("hola");
        console.log('Gasto creado correctamente', response);
      }
     
    );
  }
}
