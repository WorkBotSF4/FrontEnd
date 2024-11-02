import { Component } from '@angular/core';

@Component({
  selector: 'app-consultar-rutinas',
  templateUrl: './consultar-rutinas.component.html',
  styleUrls: ['./consultar-rutinas.component.css']
})
export class ConsultarRutinasComponent {
  consultar() {
    console.log('Consultar button clicked');
    // Aquí puedes agregar la lógica para consultar las rutinas
  }
}