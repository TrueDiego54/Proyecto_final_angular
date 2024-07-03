import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemVenta } from '../Models/item-venta';

@Injectable({
  providedIn: 'root'
})
export class ServicioItemService {
  private urlBack: string = 'http://localhost:90/user/'
  constructor(private http: HttpClient) { }
  getall():Observable<ItemVenta[]>{
    return this.http.get<ItemVenta[]>(this.urlBack)
  }

  create(item:ItemVenta):Observable<ItemVenta>{
    return this.http.post<ItemVenta>(this.urlBack,item)
  }

  update(item:ItemVenta):Observable<ItemVenta>{
    return this.http.put<ItemVenta>(this.urlBack,item)
  }
  delete(id:Number):Observable<ItemVenta>{
    return this.http.delete<ItemVenta>(this.urlBack+"/"+id)
  }
}


