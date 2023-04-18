import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataEjemploService {
  //los Services son aquellas clases que nos permiten obtener, gestionar , manipular informacion para hacer nuestra programacion mas modular...
  //Ya sea mediante APIS, Cache, o transformaciones en el mismo service
  private apiUrl = "https://fakestoreapi.com/"

  constructor( private http: HttpClient) { }


  obtenerArticulosArray(){ //Metodo sin http para pruebitas y diseño
    let productos : Product[] = [
      {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": { "rate": 3.9, "count": 120 }
      },
      {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": { "rate": 4.1, "count": 259 }
      }
    ];
    return productos;
  }

  obtenerArticulos():Observable<Product[]>{
   // return this.http.get<Product[]>('http://localhost:3000/products');
    return this.http.get<Product[]>('https://fakestoreapi.com/products?limit=2');



  }

  obtenerArticulo(){
    //Futuramente llamara a pikachu;
  }
}
