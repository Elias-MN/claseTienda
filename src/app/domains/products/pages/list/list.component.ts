import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../../../shared/services/product.service';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  listadoProductos = signal<Product[]>([]);
  cart = signal<Product[]>([]);

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
    this.cart.update(estadoActual => [...estadoActual, product]);

  }

}
