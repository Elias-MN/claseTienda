import { CommonModule } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export default class ProductDetailsComponent {

  // La ? es para indicar que puede o no venir un Input
  @Input() id?: string;
  private productService = inject(ProductService);

  private cartService = inject(CartService);

  product = signal<Product | null>(null);
  principal = signal('');

  ngOnInit() {
    if (this.id) {
      this.productService.getOneByID(this.id).subscribe({
        next: (data) => {
          this.product.set(data);
          this.principal.set(data.images[0]);
        },
        error: (e) => {
          console.log(e);
        }
      })
    }
  }

  cambiarPrincipal(newImage: string) {
    this.principal.set(newImage);
  }

  addProduct() {
    let product = this.product();
    if (product) {
      this.cartService.addProduct(product);
    }
  }

}
