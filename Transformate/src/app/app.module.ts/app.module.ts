import { AppComponent } from './../app.component';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';

import { LoginComponent } from '../componentes/log/login.component';
import { RegisterComponent } from '../componentes/register/register.component';


@NgModule({
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastModule,
    ButtonModule,
    CardModule,
    CommonModule,
    AppRoutingModule, // Aquí importamos AppRoutingModule

    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
