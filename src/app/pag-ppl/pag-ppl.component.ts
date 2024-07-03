import { Component } from '@angular/core';
import { ListadoCompraComponent } from '../listado-compra/listado-compra.component';
import { GaleriaComponent } from '../galeria/galeria.component';

@Component({
  selector: 'app-pag-ppl',
  standalone: true,
  imports: [ListadoCompraComponent,GaleriaComponent],
  templateUrl: './pag-ppl.component.html',
  styleUrl: './pag-ppl.component.css'
})
export class PagPplComponent {

}
