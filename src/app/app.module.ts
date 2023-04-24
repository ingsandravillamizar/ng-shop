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
import { TarjetaComponent } from './shopping/tienda/tarjeta/tarjeta.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from './shared/service/productos.service';
import { ProductoService } from './shared/service/producto.service';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from './shopping/producto/producto.component';
import { CategoriasService } from './shared/service/categoria.service';

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
    NotFoundComponent,
    TarjetaComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  // Es el que conecta a pos api : ProductoService
  providers: [DataEjemploService, ProductosService, ProductoService,CategoriasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
