import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bar-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './bar-nav.component.html',
  styleUrl: './bar-nav.component.css'
})
export class BarNavComponent {

}
