import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { Product } from '../model/product.model';
import { Producto } from '../model/producto.model';
//HttpCliente es un modulo que nos facilita las solicitudes http en nuestra aplicacion. Para poder hacer uso de este modulo debemos importar en el app.module "HttpClienteModule" en la seccion de imports, esta libreria nos ofrece los metodos get, post, put y delete. Adicional usa observables y el patron de programacion reactiva para manejar las respuestas y errores
//Status HTTP
//https://developer.mozilla.org/es/docs/Web/HTTP/Status

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  apiUrl = environment.apiUrl;
  apiUrlPos = environment.apiUrlPos;

  constructor(
    private http: HttpClient
  ) { }

  obtenerProductos(){ //getProducts
    //console.log("Hola me ejecute");
    return this.http.get<Product[]>(`${this.apiUrl}products`);
    //return this.http.get<Producto[]>(`${this.apiUrlPos}products`);
    console.log((`${this.apiUrlPos}products`));
  }

  obtenerProductosFiltrado(limitante: string){ //getProducts
    //console.log("Hola me ejecute");
    return this.http.get<Product[]>(`${this.apiUrl}products?limit=${limitante}`);
  }
}
