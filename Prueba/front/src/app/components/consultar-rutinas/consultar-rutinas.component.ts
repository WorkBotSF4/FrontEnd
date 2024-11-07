// src/app/consultar-rutinas.component.ts
import { Component, OnInit } from '@angular/core';
import { ListadoService } from 'src/app/services/listado.service';
import { Listado } from 'src/app/models/listado.model';

@Component({
  selector: 'app-consultar-rutinas',
  templateUrl: './consultar-rutinas.component.html',
  styleUrls: ['./consultar-rutinas.component.css']
})
export class ConsultarRutinasComponent implements OnInit {
  datos: Listado[] = [];

  constructor(private listadoService: ListadoService) {}

  ngOnInit(): void {
    // Puedes cargar datos iniciales aquí si lo deseas
  }

  consultar(): void {
    console.log('Consultar button clicked');
    this.listadoService.getDatos().subscribe((data) => {
      this.datos = data;
    });
  }
}