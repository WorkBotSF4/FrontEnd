import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// Importa TypeUserComponent
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ListadoUsuariosComponent } from './components/listado-usuarios/listado-usuarios.component';
import { ModificacionUsuarioComponent } from './components/modificacion-usuario/modificacion-usuario.component';
import { EjerciciosComponent } from './components/ejercicios/ejercicios.component';
import { RutinaComponent } from './components/rutina/rutina.component';
import { ConsultarRutinasComponent } from './components/consultar-rutinas/consultar-rutinas.component';
import { ConsultarClasesComponent } from './components/consultar-clases/consultar-clases.component';
import { ClasesComponent } from './components/clases/clases.component';
import { VistaUsuarioComponent } from './components/vista-usuario/vista-usuario.component';
import { LugaresComponent } from './components/lugares/lugares.component';

import { VistaEntrenadorComponent } from './components/vista-entrenador/vista-entrenador.component';
import { VistaAdministradorComponent } from './components/vista-administrador/vista-administrador.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListadoUsuariosComponent,
    ModificacionUsuarioComponent,
    EjerciciosComponent,
    RutinaComponent,
    ConsultarRutinasComponent,
    ConsultarClasesComponent,
    ClasesComponent,
    LugaresComponent,
    VistaUsuarioComponent,
    ListadoUsuariosComponent,
    VistaEntrenadorComponent,
    VistaAdministradorComponent,
    RutinaComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule, // Asegúrate de que ReactiveFormsModule esté importado aquí
    ButtonModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    SharedModule,
    CommonModule,



  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  exports: [

  ]
})
export class AppModule { }
export class TypeUserModule { }
