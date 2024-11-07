// src/app/listado.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Listado } from '../models/listado.model';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {
  private datos: Listado[] = [
    { id: 1, name: 'Rutina A', remarks: 'Comentario sobre la Rutina A', exercises: '5' },
    { id: 2, name: 'Rutina B', remarks: 'Comentario sobre la Rutina B', exercises: '8' }
  ];

  getDatos(): Observable<Listado[]> {
    return of(this.datos);
  }
}