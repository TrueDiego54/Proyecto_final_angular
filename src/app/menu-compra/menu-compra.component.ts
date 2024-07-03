import { Component } from '@angular/core';
import { ListadoCompraComponent } from '../listado-compra/listado-compra.component';

@Component({
  selector: 'app-menu-compra',
  standalone: true,
  imports: [ListadoCompraComponent],
  templateUrl: './menu-compra.component.html',
  styleUrl: './menu-compra.component.css'
})
export class MenuCompraComponent {

}
