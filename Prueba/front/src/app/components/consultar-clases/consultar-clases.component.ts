import { Component } from '@angular/core';

@Component({
  selector: 'app-consultar-clases',
  templateUrl: './consultar-clases.component.html',
  styleUrls: ['./consultar-clases.component.css']
})
export class ConsultarClasesComponent {
  consultar() {
    console.log('Consultar button clicked');
    // Aquí puedes agregar la lógica para consultar las clases
  }
}