import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() cambioMenu = new EventEmitter();
  navItems = [
    {id:1,nombre:"Inicio",link:"inicio",active:false,disabled:false},
    {id:2,nombre:"Tienda",link:"tienda",active:false,disabled:false},
    {id:3,nombre:"Nosotros",link:"nosotros",active:false,disabled:false},
    {id:4,nombre:"Contactanos",link:"contactanos",active:false,disabled:false}
  ];
  constructor(private router : Router) { }

  cambiarMenu(link:string){
    //debugger;
    this.router.navigate([`shopping/${link}`]);
  }



}
