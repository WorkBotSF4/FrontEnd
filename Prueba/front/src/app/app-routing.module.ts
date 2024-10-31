import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { VistaAdministradorComponent } from './components/vista-administrador/vista-administrador.component';
import { VistaEntrenadorComponent } from './components/vista-entrenador/vista-entrenador.component';
import { VistaUsuarioComponent } from './components/vista-usuario/vista-usuario.component';
import { EjerciciosComponent } from './components/ejercicios/ejercicios.component';
import { RutinaComponent } from './components/rutina/rutina.component';
import { ConsultarRutinasComponent } from './components/consultar-rutinas/consultar-rutinas.component';
import { ConsultarClasesComponent } from './components/consultar-clases/consultar-clases.component';

const routes: Routes = [
  {
    path:'consultarclas',
    component:ConsultarClasesComponent,
  },
  {
    path:'',
    component:ConsultarRutinasComponent,
  },
  {
    path:'rutina',
    component:RutinaComponent,
  },
  {
    path:'ejercicios',
    component:EjerciciosComponent,
  },
  {
    path:'Vistauser',
    component:VistaUsuarioComponent,
  },
  {
    path:'Vistan',
    component: VistaEntrenadorComponent,
  },

  {
    path:'Vistaad',
    component: VistaAdministradorComponent,
  },
{
  //este es el login
  path: 'login',
  component: LoginComponent,

},

{ path: 'login', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{
  //esta es la pesta;a de registro
  path: 'register',
  component: RegisterComponent,
},
{ path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
