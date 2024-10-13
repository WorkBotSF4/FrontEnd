import { passwordMatchValidator } from './../../shared/comparadorContraseValidator.directive';
import { RegistroCredenciales } from './../../interfaces/registroCredenciales';
import { Component } from '@angular/core';
import { RegistrarRespuesta } from '../../interfaces/registrarRespuesta';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AutenticacionService } from '../../servicios/autenticacion.service';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private authService: AutenticacionService,
    private messageService: MessageService,
    private router: Router
  ) { this.registerForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    apellido: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    usuario: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    contrasena: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, {
    validators: passwordMatchValidator
  })}
  get usuario() {
    return this.registerForm.controls['usuario'];
  }

  get contrasena() {
    return this.registerForm.controls['contrasena'];
  }
  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }
  get nombre() {
    return this.registerForm.controls['nombre'];
  }

  get apellido() {
    return this.registerForm.controls['apellido'];
  }

  get documento(){
    return this.registerForm.controls['documento'];
  }
  get rol(){
    return this.registerForm.controls['rol'];
  }
  get direccion(){
    return this.registerForm.controls['direccion'];
  }
  get celular(){
    return this.registerForm.controls['celular'];
  }
  get rutina(){
    return this.registerForm.controls['rutina'];
  }

  submitDetails() {
    const postData = { ...this.registerForm.value, idTipoUsuario: 1 };
    delete postData.confirmPassword;
    console.log(postData)

    this.authService.registrarUsuario(postData as RegistroCredenciales).subscribe(

      (response: any) => {
    // Asegúrate de que la respuesta tenga el formato esperado
        if (response.status) {
          console.log(response);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register successfully' });
          this.router.navigate(['login']);
        } else {
          console.log('Respuesta inválida', response);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid response format' });
        }
        },
      (      error: any) => {
        console.log(error)
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
    )


  }

}
