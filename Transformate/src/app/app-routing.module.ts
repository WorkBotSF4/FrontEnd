import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/log/login.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'some-path', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Solo aquí usamos forRoot
  exports: [RouterModule]
})
export class AppRoutingModule { }
