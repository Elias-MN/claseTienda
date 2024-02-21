import { Component, Input, signal } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterLinkWithHref } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkActive, RouterModule, RouterLinkWithHref],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input({ required: true }) cart: Product[] = [];
  mostrarOcultar = signal(true);

  showHide() {
    this.mostrarOcultar.set(!this.mostrarOcultar());
  }

}
