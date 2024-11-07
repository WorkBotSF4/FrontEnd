import { Component, OnInit } from '@angular/core';

interface Ejercicio {
  id: number;
  nombre: string;
  descripcion: string;
  series: number;
  selected: boolean;
}

@Component({
  selector: 'app-lista-ejercicios',
  templateUrl: './lista-ejercicios.component.html',
  styleUrls: ['./lista-ejercicios.component.css']
})
export class ListaEjerciciosComponent implements OnInit {
  ejercicios: Ejercicio[] = [
    { id: 1, nombre: 'Ejercicio 1', descripcion: 'Descripción 1', series: 3, selected: false },
    { id: 2, nombre: 'Ejercicio 2', descripcion: 'Descripción 2', series: 4, selected: false },
    // Agrega más ejercicios según sea necesario
  ];

  ngOnInit(): void {
    this.consultar();
  }

  selectEjercicio(ejercicio: Ejercicio): void {
    ejercicio.selected = !ejercicio.selected;
  }

  guardar(): void {
    const selectedEjercicios = this.ejercicios.filter(e => e.selected);
    localStorage.setItem('ejercicios', JSON.stringify(selectedEjercicios));
  }

  consultar(): void {
    location.reload();
  }
}
