import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { JwtResponseI } from '../models/jwt-response';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  url = 'http://localhost:4000/api/usuario/';
  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any> {
    return this.http.get(this.url);
  }

  guardarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(this.url, usuario);
  }

  eliminarUsuario(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  obtenerUsuario(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarUsuario(id: string, usuario: Usuario): Observable<any> {
    return this.http.put(this.url + id, usuario);
  }

  

  // Restablecer la contrasena
  recuperarCuenta(email: string): Observable<any> {
    return this.http.post(this.url + 'generar-pass', { email });
  }
  
  cambiarPassword(
    id: string,
    tempPass: string,
    nuevaPass: string
  ): Observable<any> {
    return this.http.post(this.url + 'cambiar-pass', {
      id,
      tempPass,
      nuevaPass,
    });
  }
}
