import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaseComponent } from './clase/clase.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { NavbarComponent } from './shopping/navbar/navbar.component';
import { InicioComponent } from './shopping/inicio/inicio.component';
import { TiendaComponent } from './shopping/tienda/tienda.component';
import { NosotrosComponent } from './shopping/nosotros/nosotros.component';
import { ContactoComponent } from './shopping/contacto/contacto.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { DataEjemploService } from './shared/service/data-ejemplo.service';

@NgModule({
  declarations: [
    AppComponent,
    ClaseComponent,
    ShoppingComponent,
    NavbarComponent,
    InicioComponent,
    TiendaComponent,
    NosotrosComponent,
    ContactoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataEjemploService],
  bootstrap: [AppComponent]
})
export class AppModule { }
