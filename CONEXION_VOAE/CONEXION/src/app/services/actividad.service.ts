import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { ActividadInterface } from '../models/actividad';

@Injectable({
  providedIn: 'root',
})
export class ActividadService {
  url = 'http://localhost:4000/api/actividad';
  constructor(private http: HttpClient) { }

  postActividades(actividad: any): Observable<any> {
    return this.http.post(this.url + '/', actividad);
  }

  postImagen(imagen: any): Observable<any> {
    return this.http.post(this.url + '/imagen', imagen);
  }

  getActividad(id: string): Observable<ActividadInterface> {
    return this.http.get<ActividadInterface>(this.url + '/' + id);
  }

  putActividad(id: string, actividad: ActividadInterface): Observable<ActividadInterface> {
    return this.http.put<ActividadInterface>(this.url + '/' + id, actividad);
  }

  deleteActividad(id: string): Observable<ActividadInterface> {
    return this.http.delete<ActividadInterface>(this.url + '/eliminar/' + id);
  }

  //extrar las actividades
  getActividades(): Observable<ActividadInterface[]> {
    return this.http.get<ActividadInterface[]>(this.url + '/obtener');
  }
  

}
