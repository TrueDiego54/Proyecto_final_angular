import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../Models/categoria';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServicioCategoriaService {
  private urlBack: string = 'http://localhost:90/user/'
  constructor(private http: HttpClient) { }
  getall():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.urlBack+"imprimir_categorias")
  }

  create(categoria:Categoria):Observable<Categoria>{
    return this.http.post<Categoria>(this.urlBack+"enviarcateg",categoria)
  }

  update(categoria:Categoria):Observable<Categoria>{
    return this.http.put<Categoria>(this.urlBack+"enviarcateg",categoria)
  }
  delete(categoria:Number):Observable<Categoria>{
    return this.http.delete<Categoria>(this.urlBack+"eliminar_categorias"+categoria)
  }
}
