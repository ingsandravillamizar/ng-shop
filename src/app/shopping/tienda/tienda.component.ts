import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/model/product.model';
//import { DataEjemploService } from 'src/app/shared/service/data-ejemplo.service';
import { CategoriasService } from 'src/app/shared/service/categoria.service';

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
  categorias: string[] = [];
  filtroCategoria : string = "";
  mostrarFiltro : boolean = false;

constructor(private route:ActivatedRoute ,
            //private dataEjemploService: DataEjemploService,
            //EL DEL POS
            private productoService: ProductoService,
            //EL DEL CURSO
            private _productosService: ProductosService,
            private _categoriaService: CategoriasService  ){}

            ngOnInit(): void {
              //this.productos = this.dataEjemploService.obtenerArticulos();
              // this._productosService.obtenerProductos().subscribe(
              //   (data)=>{
              //     this.productos = data;
              //   },
              // );
              this.cargarCategorias();
              this.buscarFiltrado();



            }

            buscarFiltrado(){
              this._productosService.obtenerProductos(this.limite,this.filtroCategoria).subscribe(
                (data)=>{
                  this.productosArray = data;
                },
              );
            }


            cargarCategorias(){
              this._categoriaService.obtenerCategorias().subscribe(
                (res)=>{
                  this.categorias = res;
                }
              );
            }



          }







//Notas
//Se importa, se declara en el constructor y en app.module.ts como providers dataEmploService
