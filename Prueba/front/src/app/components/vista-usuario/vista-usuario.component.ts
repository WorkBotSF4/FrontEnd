import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.css']
})
export class VistaUsuarioComponent {
  constructor(private router: Router) { }

  consultarRutinas() {
    // Lógica para consultar las rutinas del usuario
    console.log('Consultando rutinas del usuario...');
  }

  consultarClases() {
    // Lógica para consultar las clases del usuario
    console.log('Consultando clases del usuario...');
  }

  cerrarSesion() {
    // Lógica para cerrar sesión (igual que en el otro componente)
    console.log('Cerrando sesión...');
  }
}
