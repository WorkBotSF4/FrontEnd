import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent {
  crear() {
    console.log('Crear');
  }

  eliminar() {
    console.log('Eliminar');
  }

  modificar() {
    console.log('Modificar');
  }

  atras() {
    console.log('Atrás');
  }
}
