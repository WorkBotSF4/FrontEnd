// src/app/services/clase.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Clase } from '../models/clase.model';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {
  private datos: Clase[] = [
    { id: 1, name: 'Clase A', description: 'Descripción de la Clase A', serie: '10' },
    { id: 2, name: 'Clase B', description: 'Descripción de la Clase B', serie: '8' }
  ];

  getDatos(): Observable<Clase[]> {
    return of(this.datos);
  }
}