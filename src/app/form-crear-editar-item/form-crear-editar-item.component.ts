import { Component, Input, OnInit } from '@angular/core';
import { ItemVenta } from '../Models/item-venta';
import { Categoria } from '../Models/categoria';
import { ServicioItemService } from '../Services/servicio-item.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicioCategoriaService } from '../Services/servicio-categoria.service';
import { Router } from 'express';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-crear-editar-item',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './form-crear-editar-item.component.html',
  styleUrl: './form-crear-editar-item.component.css'
})
export class FormCrearEditarItemComponent implements OnInit{
  @Input() id_item:number = 0
  
  @Input() nombre:string = ''
  @Input() descripcion:string = ''
  @Input() precio:number = 0
  @Input() categoria!:Categoria
  @Input() categorias:Categoria[] = []
  prueba:string = 'hola'
  aux!:ItemVenta
  form!: FormGroup;

  constructor(private servicio_item:ServicioItemService,private fb: FormBuilder){

  }
  ngOnInit(): void {
    this.form = this.fb.group({
      id_item: ['',],
      nombre: ['',[Validators.required]],
      descripcion: ['',[Validators.required]],
      precio: ['',[Validators.required]],
      categoria: ['',[Validators.required]]
    })  
  }
  
  enviar(){
    const item_enviar = this.form.value
    this.servicio_item.create(item_enviar).subscribe(()=>{});
  }
  
}
