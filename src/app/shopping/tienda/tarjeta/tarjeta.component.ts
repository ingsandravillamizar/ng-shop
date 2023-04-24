import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/model/product.model';
import { DataEjemploService } from 'src/app/shared/service/data-ejemplo.service';

// Para api Pos
import { Producto } from 'src/app/shared/model/producto.model';
import { ProductoService} from 'src/app/shared/service/producto.service';
import { ProductosService } from 'src/app/shared/service/productos.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {

  @Input() prodTarjeta  : Product = new Product();
  //@Input() prodTarjetaPos  : Producto = new Producto();
  @Output() refrescar = new EventEmitter();


  constructor(
    private _productosService : ProductosService
  ) { }

  eliminarProducto(id:number){
    this._productosService.eliminarProducto(id).subscribe(
      (data)=>{
        alert("Eliminado exitosamente!");
        this.refrescar.emit();
      }
    );
  }

}
