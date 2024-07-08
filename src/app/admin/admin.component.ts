import { Component, OnInit } from '@angular/core';
import { NavAdminComponent } from '../nav-admin/nav-admin.component';
import { ServicioCategoriaService } from '../Services/servicio-categoria.service';
import { ServicioItemService } from '../Services/servicio-item.service';
import { ItemVenta } from '../Models/item-venta';
import { Categoria } from '../Models/categoria';
import { FormCrearEditarItemComponent } from '../form-crear-editar-item/form-crear-editar-item.component';
import { FormCrearEditarCategoriaComponent } from '../form-crear-editar-categoria/form-crear-editar-categoria.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NavAdminComponent,FormCrearEditarItemComponent,FormCrearEditarCategoriaComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  itemsventa:ItemVenta[] = []
  categorias:Categoria[] = []
  mostrarform:boolean= false
  mostrarformlist_item:boolean[]= []
  mostrarformlist_categoria:boolean[]= []

  tipodata!:boolean
  constructor(private servicio_item:ServicioItemService,private servicio_categoria:ServicioCategoriaService){
}
  ngOnInit(): void {
    this.tipodata =JSON.parse(sessionStorage.getItem('data')!) || []
    console.log(JSON.parse(sessionStorage.getItem('data')!) || [])
    console.log(this.tipodata)
    this.servicio_item.getall().subscribe(
      e => this.itemsventa=e
    );  
    this.servicio_categoria.getall().subscribe(
      e => this.categorias = e
    );
    for (let i = 0; i < this.itemsventa.length; i++) {
      this.mostrarformlist_item[i] = false
      
    }
    for (let i = 0; i < this.itemsventa.length; i++) {
      this.mostrarformlist_categoria[i] = false
      
    }
  }
  abrirCerrarCarrito():void{
    this.mostrarform = !this.mostrarform;
  }

  abrireditar_item(index:number){
    this.mostrarformlist_item[index] = !this.mostrarformlist_item[index];
  }
  abrireditar_cat(index:number){
    this.mostrarformlist_categoria[index] = !this.mostrarformlist_categoria[index];
  }
  onCambiardata(env:any){
    this.tipodata = env
    sessionStorage.setItem('data',JSON.stringify(this.tipodata.toString()))
    console.log(this.tipodata)
    console.log(JSON.parse(sessionStorage.getItem('data')!) || [])

  }
}
