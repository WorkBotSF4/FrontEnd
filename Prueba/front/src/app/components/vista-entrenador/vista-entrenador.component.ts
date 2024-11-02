import { Component } from '@angular/core';

@Component({
  selector: 'app-vista-entrenador',
  templateUrl: './vista-entrenador.component.html',
  styleUrls: ['./vista-entrenador.component.css']
})
export class VistaEntrenadorComponent {

  crearEjercicios() {
    // Lógica para manejar la creación de ejercicios
    console.log('Creando ejercicios...');
  }

  crearRutinas() {
    // Lógica para manejar la creación de rutinas
    console.log('Creando rutinas...');
  }

  crearClases() {
    // Lógica para manejar la creación de clases
    console.log('Creando clases...');
  }

  cerrarSesion() {
    // Lógica para cerrar sesión (por ejemplo, redireccionar a la página de inicio de sesión)
    console.log('Cerrando sesión...');
  }
}