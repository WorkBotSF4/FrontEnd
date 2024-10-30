import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';
import { UsuarioCredenciales } from '../interfaces/usuarioCredenciales';
import { UsuarioLegeo } from '../interfaces/usuarioLogeo';
import { RegistroCredenciales } from '../interfaces/registroCredenciales';
import { RegistrarRespuesta } from '../interfaces/registrarRespuesta';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private baseUrl = 'http://localhost:8080/transformate/v1';

  constructor(private http: HttpClient) { }
  login(usuario:UsuarioCredenciales){
    return this.http.post<UsuarioLegeo>(`${this.baseUrl}/Authentication/log`, usuario  );
  }

  registrarUsuario(detallesUsuario: RegistroCredenciales): Observable<RegistrarRespuesta> {
  return this.http.post<RegistrarRespuesta>(`${this.baseUrl}/Authentication/reg`, detallesUsuario);
  }


  obtenerUsuarioPorEmail(email: string): Observable<Usuario[]> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', localStorage.getItem('token') || '');

    return this.http.get<Usuario[]>(`${this.baseUrl}/users?email=${email}`, { headers });
  }
}
