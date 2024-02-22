import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterLinkWithHref } from '@angular/router';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkActive, RouterModule, RouterLinkWithHref, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input({ required: true }) cart: Product[] = [];
  mostrarOcultar = signal(true);

  total = signal(0);

  showHide() {
    this.mostrarOcultar.set(!this.mostrarOcultar());
  }

  ngOnChanges(cambios: SimpleChanges) {
    let cart = cambios['cart'];
    if (cart) {
      this.total.set(this.calcularTotal());
    }
  }

  calcularTotal() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

}
