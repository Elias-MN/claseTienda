import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  total = computed(() => {
    //Opción 1
    //this.cart();
    //return this.calcularTotal();

    //Opción 2
    //let cart = this.cart();
    //return cart.reduce((total, product) => total + product.price, 0);

    //Opción 3
    return this.calcularTotal();
  });

  addProduct(product: Product) {
    this.cart.update(estadoActual => [...estadoActual, product]);
  }

  calcularTotal() {
    return this.cart().reduce((total, product) => total + product.price, 0);
  }

}
