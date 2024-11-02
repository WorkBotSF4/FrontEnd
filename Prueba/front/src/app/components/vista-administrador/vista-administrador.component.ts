import { Component } from '@angular/core';

@Component({
  selector: 'app-vista-administrador',
  templateUrl: './vista-administrador.component.html',
  styleUrls: ['./vista-administrador.component.css']
})
export class VistaAdministradorComponent {

  modificarUsuarios() {
    console.log("Modificar Usuarios");
  }

  modificarLugares() {
    console.log("Modificar Lugares");
  }

  cerrarSesion() {
    console.log("Cerrar Sesión");
  }
}