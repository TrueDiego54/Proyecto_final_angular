import { Component,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-nav-admin',
  standalone: true,
  imports: [],
  templateUrl: './nav-admin.component.html',
  styleUrl: './nav-admin.component.css'
})
export class NavAdminComponent {
  @Output() idproductoEventEmitter = new EventEmitter();

  onCambiardata(env:boolean){
    this.idproductoEventEmitter.emit(env)
  }
}
