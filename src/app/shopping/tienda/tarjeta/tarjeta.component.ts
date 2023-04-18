import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/model/product.model';
import { DataEjemploService } from 'src/app/shared/service/data-ejemplo.service';

// Para api Pos
import { Producto } from 'src/app/shared/model/producto.model';
import { ProductoService} from 'src/app/shared/service/producto.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {

  //@Input() prodTarjeta  : Product = new Product();
  @Input() prodTarjetaPos  : Producto = new Producto();


}
