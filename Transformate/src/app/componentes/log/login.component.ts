import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UsuarioCredenciales } from '../../interfaces/usuarioCredenciales';
import { UsuarioLegeo } from '../../interfaces/usuarioLogeo';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { ButtonModule } from 'primeng/button';
import { TipoUsuarioService } from '../../servicios/tipo-usuario.service'; // Importa el servicio UserTypeService
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ButtonModule, CardModule, ReactiveFormsModule,CommonModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userType: string = '';
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AutenticacionService,
    private router: Router,
    private msgService: MessageService,
    private userTypeService: TipoUsuarioService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]+$/)]],
      password: ['', Validators.required]
    });

    this.userTypeService.tipoUsuarioCambiado.subscribe((userType: string) => {
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
    };

    this.authService.login(formData).subscribe(
      (response: UsuarioLegeo) => {
        console.log(response);
        if (response) {
          localStorage.setItem('username', response.nombre);
          localStorage.setItem('token', `Bearer ${response.token}`);
          localStorage.setItem('userId', String(response.id));
          localStorage.setItem('userType', this.userType); // Asegúrate de guardar el userType aquí

          if (this.userType === 'Usuario') {
            this.router.navigate(['/usuario']);
          } else {
            this.router.navigate(['/tecnico']);
          }
        } else {
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
    console.log('Tipo de usuario seleccionado:', this.userType);
  }
}
