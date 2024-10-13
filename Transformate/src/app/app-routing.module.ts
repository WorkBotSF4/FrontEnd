import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/login/login.component';
//import { authGuard } from './guards/auth.guard';
const routes: Routes = [{

  //este es el login
  path: 'login',
  component: LoginComponent,
  pathMatch: 'full',
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
