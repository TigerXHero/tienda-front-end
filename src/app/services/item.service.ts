import {Injectable} from '@angular/core';
import {Item} from '../shared/item';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/observable/of';
import 'rxjs-compat/add/operator/delay';
import {HttpClient} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {
  }

  guardarImagen(file: File, id: number): Observable<Response> {
    let form = new FormData();
    form.append('file', file);
    return this.http.post<Response>(baseURL + 'maquinarias/' + id + '/imagen', form);
  }

  getMaquinarias(): Observable<Item[]> {
    return <Observable<Item[]>>this.http.get(baseURL + 'maquinarias');
  }

  getMaquinaria(id: number): Observable<Item> {
    return <Observable<Item>>this.http.get(baseURL + 'maquinarias/' + id);
  }

  getItems(): Observable<Item[]> {
    // return Observable.of(ITEMS).delay(2000);
    return <Observable<Item[]>>this.http.get(baseURL + 'items');
  }

  getItem(id: number): Observable<Item> {
    return <Observable<Item>>this.http.get(baseURL + 'items/' + id);
  }

  getFeaturedItem(): Observable<Item> {
    return <Observable<Item>>this.http.get(baseURL + 'items?featured=true');
  }

  getItemIds(): Observable<number[]> {
    return <Observable<number[]>>this.http.get(baseURL + 'items').pipe(map(items => (<Item[]>items).map(item => item.id)));
  }

}
