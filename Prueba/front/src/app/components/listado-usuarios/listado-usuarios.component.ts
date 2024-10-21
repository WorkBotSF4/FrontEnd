import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/interfaces/user';
import { registerCredentials } from 'src/app/interfaces/registerCredentials';
import { IResponseRegister } from 'src/app/interfaces/registerResponse';


@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit{
  listadoForm = this.fb.group({

  });
  registerForm: any;
  authService: any;
  messageService: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  users: User[] = [
    {
      nombre: "Juan Pérez",
      documento: "123456789",
      rol: "Administrador",
    },
    {
      nombre: "María Gómez",
      documento: "123456789",
      rol: "Usuario",
    },
    {
      nombre: "Carlos Rodríguez",
      documento: "123456789",
      rol: "Usuario",

    },
  ];
  constructor(private router: Router,private fb: FormBuilder,private msgService: MessageService,) { }
  onModifyUser(user: User): void {
    // Implementar lógica para modificar el usuario
    console.log('Modificar usuario:', user);
  }

  onDeleteUser(user: User): void {
    // Implementar lógica para eliminar el usuario
    console.log('Eliminar usuario:', user);
  }

}
