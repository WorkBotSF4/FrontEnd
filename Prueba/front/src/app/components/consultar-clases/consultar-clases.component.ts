// src/app/consultar-clases.component.ts
import { Component, OnInit } from '@angular/core';
import { ClaseService } from 'src/app/services/clase.service';
import { Clase } from 'src/app/models/clase.model';

@Component({
  selector: 'app-consultar-clases',
  templateUrl: './consultar-clases.component.html',
  styleUrls: ['./consultar-clases.component.css']
})
export class ConsultarClasesComponent implements OnInit {
  datos: Clase[] = [];

  constructor(private claseService: ClaseService) {}

  ngOnInit(): void {
    // Puedes cargar datos iniciales aquí si lo deseas
  }

  consultar(): void {
    console.log('Consultar button clicked');
    this.claseService.getDatos().subscribe((data) => {
      this.datos = data;
    });
  }
}
