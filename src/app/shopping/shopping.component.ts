import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  menuActivo = 1;


  constructor() { }

  ngOnInit(): void {
  }

  asignarMenuActivo(id:any){
    debugger;
    this.menuActivo = id;
  }

}


//notas se requiere instalar boostrap
//npm i bootstrap@5.3.0-alpha2
