import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {baseURL} from '../shared/baseurl';
import {HttpClient} from '@angular/common/http';
import {Maquinaria} from '../shared/maquinaria';

@Injectable({
  providedIn: 'root'
})
export class MaquinariaService {

  constructor(private http: HttpClient) { }

  getMaquinarias(): Observable<Maquinaria[]> {
    return <Observable<Maquinaria[]>>this.http.get(baseURL + 'maquinarias');
  }

  getMaquinaria(id: number): Observable<Maquinaria> {
    return <Observable<Maquinaria>>this.http.get(baseURL + 'maquinarias/' + id);
  }

  guardarImagen(file: File, id: number): Observable<Response> {
    let form = new FormData();
    form.append('file', file);
    return this.http.post<Response>(baseURL + 'maquinarias/' + id + '/imagen', form);
  }

}
