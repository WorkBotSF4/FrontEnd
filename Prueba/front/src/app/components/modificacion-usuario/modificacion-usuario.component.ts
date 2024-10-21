import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/interfaces/user';
import { registerCredentials } from 'src/app/interfaces/registerCredentials';
import { IResponseRegister } from 'src/app/interfaces/registerResponse';
@Component({
  selector: 'app-modificacion-usuario',
  templateUrl: './modificacion-usuario.component.html',
  styleUrls: ['./modificacion-usuario.component.css']
})
export class ModificacionUsuarioComponent {
  constructor(private router: Router,private fb: FormBuilder,private msgService: MessageService,) { }
  modifUserForm = this.fb.group({

  });
guardar() {
    // Aquí harías la lógica para guardar el usuario
    console.log('Usuario guardado:');
  }

  cancelar() {
    // Aquí harías la lógica para cancelar la acción
    console.log('Cancelado');
  }
}
