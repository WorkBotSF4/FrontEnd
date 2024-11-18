import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasesComponent } from './components/clases/clases.component';
import { ConsulRutinasComponent } from './components/consul-rutinas/consul-rutinas.component';
import { VistaUsuarioComponent } from './components/vista-usuario/vista-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { VistaEntrenadorComponent } from './components/vista-entrenador/vista-entrenador.component';

const routes: Routes = [

  {path:'clases',component:ClasesComponent},
  {path:'rutinas',component:ConsulRutinasComponent},
  {path:'vis',component:VistaUsuarioComponent},
  {path:'',component:VistaEntrenadorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
