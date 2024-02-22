import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterLinkWithHref } from '@angular/router';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkActive, RouterModule, RouterLinkWithHref, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  //@Input({ required: true }) cart: Product[] = [];
  //total = signal(0);
  mostrarOcultar = signal(true);

  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  showHide() {
    this.mostrarOcultar.set(!this.mostrarOcultar());
  }

  /*
  ngOnChanges(cambios: SimpleChanges) {
    let cart = cambios['cart'];
    if (cart) {
      this.total.set(this.calcularTotal());
    }
  }
  */


}
