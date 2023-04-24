import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, OnDestroy {
  private subscription : any;
  constructor() {}

  ngOnInit(): void {
    let i = 0;
    this.subscription = setInterval(()=>{
      i++;
      console.log(`Soy una prueba del onDestroy ${i}`);
    },1000);
  }

  ngOnDestroy(){
    //Ejemplo de ondestroy;
    clearInterval(this.subscription);
  }
}
