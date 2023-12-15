import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from './usuario';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
  
})
export class UsuarioFormComponent {
  model = new Usuario(1, '', '', '', '', ''); // inicializo.
  submitted = false;

  constructor(private usuarioService: UsuarioService) {}  // Inyección del servicio aquí



  onSubmit(formulario: NgForm) {
    if (formulario.valid) {
      console.log('Este es un mensaje en la consola.');

      this.model.nombreUsuario = formulario.value.nombreUsuario;
      this.model.nombre = formulario.value.nombre;
      this.model.apellido = formulario.value.apellido;
      this.model.email = formulario.value.email;
      this.model.contrasena = formulario.value.contrasena;
      this.submitted = true;

      console.log('Datos del usuario:', this.model);
      this.usuarioService.registrarUsuario(this.model).subscribe(
        response => {
          console.log('Registro exitoso:', response.body);
        },
        error => {
          console.error('Error al registrar usuario:', error);
        }
      );
  }}
}
