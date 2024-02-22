import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  listadoProductos = signal<Product[]>([]);
  //cart = signal<Product[]>([]);

  private cartService = inject(CartService);
  cart = this.cartService.cart;

  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        console.log(data);
        this.listadoProductos.set(data);
      },
      error: (e) => {
        console.error(e);
      }
    })
  }

  addProduct(product: Product) {
    this.cartService.addProduct(product);
  }

}
