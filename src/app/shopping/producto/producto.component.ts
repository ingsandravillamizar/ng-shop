import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/model/product.model';
import { ProductosService } from 'src/app/shared/service/productos.service';
import { CategoriasService } from 'src/app/shared/service/categoria.service';;

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto : Product = new Product();
  categorias : string[] =[];


  constructor(
    private _productosService : ProductosService,
    private _categoriaService : CategoriasService,
    private router : Router,
    private activatedRoute : ActivatedRoute

  ) { }




  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params)=>{
      if(params.get('id')){
        this.obtenerProducto(+params.get('id')!);
      }
    });
    this.cargarCategorias();
  }


  obtenerProducto(id: number){
    this._productosService.obtenerProducto(id).subscribe(
      (res)=>{
        this.producto = res;
    });
  }

   cargarCategorias(){
     this._categoriaService.obtenerCategorias().subscribe(
       (res)=>{
         this.categorias = res;
       }
     );
   }

  // guardarProducto(){
  //   this._productosService.guardarProducto(this.producto).subscribe(
  //     (jaimito)=>{
  //       console.log(jaimito);
  //       this.router.navigateByUrl('/tienda');
  //     }
  //   );
  // }


  guardarProducto(){
    if(this.producto.id == 0){
      this._productosService.guardarProducto(this.producto).subscribe(
        (res)=>{
          console.log(res);
          this.router.navigateByUrl('/tienda');
        }
      );
    }else{
      this._productosService.actualizarProducto(this.producto).subscribe(
        (res)=>{
          console.log(res);
          this.router.navigateByUrl('/tienda');
        }
      );
    }

  }




}
