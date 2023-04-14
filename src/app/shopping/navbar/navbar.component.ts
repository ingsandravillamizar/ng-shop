import { Component, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() cambioMenu = new EventEmitter();
  navItems = [
    {id:1,nombre:"Inicio",link:"inicio",disabled:false},
    {id:2,nombre:"Tienda",link:"tienda",disabled:false},
    {id:3,nombre:"Nosotros",link:"nosotros",disabled:false},
    {id:4,nombre:"Contactanos",link:"contactanos",disabled:false}
  ];
  constructor(private router : Router,
              private activedRoute: ActivatedRoute) {

               }

  cambiarMenu(link:string){
    //debugger;
    this.router.navigate([`shopping/${link}`]);
  }


  // esRutaActiva(ruta:string){
  //   const esActiva = this.activedRoute.root.firstChild;

  // }


}
