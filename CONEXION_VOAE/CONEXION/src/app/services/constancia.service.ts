import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Constancia } from '../models/constancia';

@Injectable({
  providedIn: 'root'
})
export class ConstanciasService {
  url = 'http://localhost:4000/api/constancia/';

  constructor(private http: HttpClient) { }


  getConstancias(): Observable<any>{
    return this.http.get(this.url);
  }

  guardarConstancias(constancia: Constancia): Observable<any> {
    return this.http.post(this.url, constancia);
  }

  eliminarConstancia(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  obtenerConstancia(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }

  editarConstancia(id: string, constancia: Constancia): Observable<any>{
    return this.http.put(this.url + id, constancia)
  }
  }

