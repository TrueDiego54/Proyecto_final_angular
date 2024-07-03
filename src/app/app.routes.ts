import { Routes } from '@angular/router';
import { appConfig } from './app.config';
import { MenuCompraComponent } from './menu-compra/menu-compra.component';
import { CarritoPagComponent } from './carrito-pag/carrito-pag.component';
import { PagPplComponent } from './pag-ppl/pag-ppl.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProcesoComponent } from './proceso/proceso.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaComponent } from './galeria/galeria.component';

export const routes: Routes = [
    {'path': '', component:PagPplComponent},
    {'path': 'compra', component:CarritoPagComponent},
    {'path': 'nosotros', component:NosotrosComponent},
    {'path': 'proceso', component:ProcesoComponent},
    {'path': 'menu', component:MenuCompraComponent},
    {'path': 'galeria', component:GaleriaComponent},
    {'path': 'contacto', component:ContactoComponent},
    {'path': 'admin', component:CarritoPagComponent}
];
