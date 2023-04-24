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

  // obtenerProductos(limitante?: string){ //getProducts ReadAll
  //   //console.log("Hola me ejecute");
  //   let param ="";
  //   if(limitante!=""){
  //     param=`?limit=${limitante}`;
  //   }
  //   return this.http.get<Product[]>(`${this.apiUrl}products${param}`);
  // }


  obtenerProductos(limitante?: string, categoria?:string){ //getProducts ReadAll
    //console.log("Hola me ejecute");
    let param ="";
    if(limitante!=""){
      param=`?limit=${limitante}`;
    }

    if(categoria!=""){
      categoria = '/category/'+categoria;
    }

    return this.http.get<Product[]>(`${this.apiUrl}products${categoria}${param}`);
  }



  obtenerProducto(id:number){ //getProduct Read
    return this.http.get<Product>(`${this.apiUrl}products/${id}`);
  }


  guardarProducto(producto:Product){ //createProducts Create
    return this.http.post<Product>(`${this.apiUrl}products`,producto);
  }

  actualizarProducto(producto: Producto){
    return this.http.put<Producto>(`${this.apiUrl}products/${producto.id}`,producto);
  }

  eliminarProducto(id:number){
    return this.http.delete<Producto>(`${this.apiUrl}products/${id}`);
  }


}
