import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaseComponent } from './clase/clase.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { ContactoComponent } from './shopping/contacto/contacto.component';
import { InicioComponent } from './shopping/inicio/inicio.component';
import { NosotrosComponent } from './shopping/nosotros/nosotros.component';
import { ProductoComponent } from './shopping/producto/producto.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { TiendaComponent } from './shopping/tienda/tienda.component';

const routes: Routes = [
  //1.- Rutas especificas: Hay rutas que pueden llevar parametros y estas son las primeras que deben ser declaradas
  //2.- Rutas generales: Son rutas generales que tienden a ser componentes
  //3.- Ruta principal: que son aquelas rutas que no tienen path
  //4.- Rutas anidadas: Que son aquellas rutas que importan modulos
  //5.- Ruta 404 / No se consiguio : Que es para donde se redirige la aplicacion en caso de no conseguir rutas

  {
    path: '',
    component: ShoppingComponent,
    children: [
      { path: 'producto/:id', component: ProductoComponent },
      { path: 'inicio', component: InicioComponent },
      { path: 'tienda', component: TiendaComponent },
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'contactanos', component: ContactoComponent },
      { path: 'producto', component: ProductoComponent },
    ],
  },
  { path: 'clase', component: ClaseComponent },
  { path: '', component: ShoppingComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
