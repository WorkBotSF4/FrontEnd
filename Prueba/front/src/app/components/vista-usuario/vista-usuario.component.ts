import { Component } from '@angular/core';

@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.css']
})
export class VistaUsuarioComponent {

  consultarRutinas() {
    // Lógica para consultar rutinas
    console.log('Consultar Rutinas');
  }

  consultarClases() {
    // Lógica para consultar clases
    console.log('Consultar Clases');
  }

  cerrarSesion() {
    // Lógica para cerrar sesión
    console.log('Cerrar Sesión');
  }
}