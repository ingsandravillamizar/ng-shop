import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() cambioMenu = new EventEmitter();

  navItems = [
    {id:1,nombre:"Inicio",link:"#",active:false,disabled:false},
    {id:2,nombre:"Tienda",link:"#",active:false,disabled:false},
    {id:3,nombre:"Nosotros",link:"#",active:false,disabled:false},
    {id:4,nombre:"Contactanos",link:"#",active:false,disabled:false}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  cambiarMenu(id:number){
    this.cambioMenu.emit(id);
  }

}
