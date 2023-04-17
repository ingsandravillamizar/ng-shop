import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/model/product.model';
import { DataEjemploService } from 'src/app/shared/service/data-ejemplo.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  paramPorRuta : any;
  productosArray : Product[] = [];


constructor(private route:ActivatedRoute , private dataEjemploService: DataEjemploService){}

ngOnInit(): void {
  this.productosArray = this.dataEjemploService.obtenerArticulosArray();
  console.log(this.productosArray);

};

}





//Despues se revisa esto..

// gOnInit(): void {
//   this.route.paramMap.subscribe((params)=>{
//    //debugger;
//    this.paramPorRuta = params.get('id');
//     // const param = +params.get('id')!;
//     // console.log(param);
//       });

// }



//Notas

//Se importa, se declara en el constructor y en app.module.ts como providers dataEmploService
