import { Component, OnInit } from '@angular/core';
import { ItemVenta } from '../Models/item-venta';
import { ServicioItemService } from '../Services/servicio-item.service';

@Component({
  selector: 'app-listado-compra',
  standalone: true,
  imports: [],
  templateUrl: './listado-compra.component.html',
  styleUrl: './listado-compra.component.css'
})

export class ListadoCompraComponent implements OnInit{
    itemsventa:ItemVenta[] = []
    itemsventa_comida:ItemVenta[] = []
    itemsventa_cafe:ItemVenta[] = []

  constructor(private servicio_item:ServicioItemService){
  }
  ngOnInit(): void {
    this.servicio_item.getall().subscribe(
      e => this.itemsventa=e
    );
      this.itemsventa_cafe= this.itemsventa.filter((a=> a.categoria.id_categoria == 1 
      ));
  
      this.itemsventa_comida= this.itemsventa.filter((a=> a.categoria.id_categoria== 2 
      ));
      console.log(this.itemsventa_cafe)  

    
  }
}
