import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  paramPorRuta : any;
constructor(private route:ActivatedRoute ){}

ngOnInit(): void {
  this.route.paramMap.subscribe((params)=>{
   //debugger;
   this.paramPorRuta = params.get('id');
    // const param = +params.get('id')!;
    // console.log(param);
      });

}

}
