
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {
  tipoUsuarioCambiado= new EventEmitter<string>();
  asignarTipoUsuario(type:string){
    this.tipoUsuarioCambiado.emit(type);
  }

  constructor() { }
}
