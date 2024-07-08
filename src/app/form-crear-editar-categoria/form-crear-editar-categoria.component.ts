import { Component, Input, OnInit, inject } from '@angular/core';
import { ServicioCategoriaService } from '../Services/servicio-categoria.service';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-crear-editar-categoria',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-crear-editar-categoria.component.html',
  styleUrl: './form-crear-editar-categoria.component.css'
})
export class FormCrearEditarCategoriaComponent implements OnInit{
  @Input() id_categoria:Number = 0
  
  @Input() nombre:string = ''

  form!: FormGroup;
 

  constructor(private servicio_cat:ServicioCategoriaService,private fb: FormBuilder,private router:Router){

  }
  ngOnInit(): void {
    this.form = this.fb.group({
      id_categoria: [''],
      nombre: ['',[Validators.required]],
    })  
  }
  
  enviar(){
    const categoria_enviar = this.form.value
    
    if(this.form.value.id_categoria === 0){
      this.servicio_cat.create(categoria_enviar).subscribe(()=>{
      });  
    }else{
      this.servicio_cat.update(categoria_enviar).subscribe(()=>{
      });  
    }
    
  }
  
}
