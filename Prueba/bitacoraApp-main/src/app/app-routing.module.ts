
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent}
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { authGuard } from './guards/auth.guard';


import { FormsModule } from '@angular/forms';


const routes: Routes = [







{
  //este es el login
  path: 'login',
  component: LoginComponent,
},



{
  //esta es la pesta;a de registro
  path: 'register',
  component: RegisterComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
