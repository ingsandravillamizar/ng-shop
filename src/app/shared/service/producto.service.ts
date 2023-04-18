import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../model/producto.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = "http://localhost:3000/"

  constructor( private http: HttpClient) { }


  obtenerArticulos():Observable<Producto[]>{
     return this.http.get<Producto[]>('http://localhost:3000/products');



   }


}










