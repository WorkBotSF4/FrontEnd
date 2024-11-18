import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


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
import { ClasesComponent } from './components/clases/clases.component';
import { ConsulRutinasComponent } from './components/consul-rutinas/consul-rutinas.component';
import { VistaUsuarioComponent } from './components/vista-usuario/vista-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { VistaEntrenadorComponent } from './components/vista-entrenador/vista-entrenador.component';
import { EjerciciosComponent } from './components/ejercicios/ejercicios.component';





@NgModule({
  declarations: [
    AppComponent,
    ConsulRutinasComponent,
    ClasesComponent,
    VistaUsuarioComponent,
    HomeComponent,
    VistaEntrenadorComponent,
    EjerciciosComponent,
    
    

    
  

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
