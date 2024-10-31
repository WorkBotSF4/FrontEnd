// rutina.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent {
  verEjercicios() {
    // Aquí implementarás la lógica para mostrar los ejercicios
    console.log('Ver ejercicios');
    // Puedes redirigir a otra página o mostrar un modal con los ejercicios
  }
}