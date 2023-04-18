import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/model/product.model';
//import { DataEjemploService } from 'src/app/shared/service/data-ejemplo.service';


// Para api Pos
import { Producto } from 'src/app/shared/model/producto.model';
import { ProductoService} from 'src/app/shared/service/producto.service';
import { ProductosService } from 'src/app/shared/service/productos.service';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  paramPorRuta : any;
  productosArray : Product[] = [];
  productosPos   : Producto[] = [];

  limite:string ="";

constructor(private route:ActivatedRoute ,
            //private dataEjemploService: DataEjemploService,
            private productoService: ProductoService,
            private _productosService: ProductosService){}


            ngOnInit(): void {
              //this.productos = this.dataEjemploService.obtenerArticulos();
              this._productosService.obtenerProductos().subscribe(
                (data)=>{
                  this.productosPos = data;
                  console.log("AQUI",  this.productosPos);
                },
              );
            }

            buscarFiltrado(){
              this._productosService.obtenerProductosFiltrado(this.limite).subscribe(
                (data)=>{
                  this.productosArray = data;
                },
              );
            }
          }

//Notas

//Se importa, se declara en el constructor y en app.module.ts como providers dataEmploService
