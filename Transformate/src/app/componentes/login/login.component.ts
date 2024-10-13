import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UsuarioCredenciales } from '../../interfaces/usuarioCredenciales';
import { UsuarioLegeo } from '../../interfaces/usuarioLogeo';
import { AutenticacionService } from '../../servicios/autenticacion.service';

import { TipoUsuarioService } from '../../servicios/tipo-usuario.service'; // Importa el servicio UserTypeService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userType: string = '';
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AutenticacionService,
    private router: Router,
    private msgService: MessageService,
    private userTypeService: TipoUsuarioService
  ) {
    // Inicializamos el form dentro del constructor
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]+$/)]],
      password: ['', Validators.required]
    });
  }




  ngOnInit(): void {
    // Inicializar loginForm dentro de ngOnInit
    // Inicializar loginForm dentro de ngOnInit

   this.userTypeService.tipoUsuarioCambiado.subscribe((userType:string) => {
  this.handleUserTypeChange(userType);
});

  }

  get username() {
    return this.loginForm.controls['username'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  loginUser() {
    const { username, password } = this.loginForm.value;
    const formData: UsuarioCredenciales = {
      nombreUsuario: username as string,
      password: password as string
    }

    // Aquí puedes usar this.userType según tus necesidades
    this.authService.login(formData).subscribe(
      (response: UsuarioLegeo) => {
        console.log(response)
        // Verifica si se recibió una respuesta válida
        if (response) {
          // Aquí puedes realizar la lógica de autenticación
          localStorage.setItem('username', response.nombre);
          localStorage.setItem('token', `Bearer ${response.token}`); // Solo un ejemplo, token ficticio
          localStorage.setItem('userId', String(response.id)); // Suponiendo que el id del usuario está disponible en el primer elemento
          this.router.navigate(localStorage.getItem('userType') === 'Usuario' ? ['/usuario'] : ['/tecnico']);
        } else {
          // Si no se recibe una respuesta válida, muestra un mensaje de error
          this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Credenciales inválidas' });
        }
      },
      (_error: any) => {
        this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Algo salió mal' });
      }
    );
  }

  handleUserTypeChange(userType: string) {
    this.userType = userType;
    // Aquí puedes realizar cualquier acción adicional con el tipo de usuario
    console.log('Tipo de usuario seleccionado:', this.userType);
  }
}
