import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'primeng/api';
import { AppComponent } from '../app.component';
import { RegisterComponent } from '../componentes/register/register.component';
import { LoginComponent } from '../componentes/login/login.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClient } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    RegisterComponent],

  imports: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule, // Asegúrate de que ReactiveFormsModule esté importado aquí
    ButtonModule,

    ToastModule,
    BrowserAnimationsModule,
    SharedModule,
    CommonModule,

  ],
  providers: [MessageService],
  bootstrap:[],
  exports:[]
})
export class AppModule { }
