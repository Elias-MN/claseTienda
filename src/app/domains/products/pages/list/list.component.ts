import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  listadoProductos = signal<Product[]>([]);

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

  add(event: string) {
    console.log(event);
  }

}
