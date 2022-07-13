import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ActividadService {
  url = 'http://localhost:4000/api/actividad';
  constructor(private http: HttpClient) {}

  postActividades(actividad: any): Observable<any> {
    return this.http.post(this.url + '/', actividad);
  }

  postImagen(imagen: any): Observable<any> {
    return this.http.post(this.url + '/imagen', imagen);
  }
   obtenerActividad(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  //extrar las actividades



}
