import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { Category } from '@shared/models/category';
import { CategoryService } from '@shared/services/category.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {

  listadoProductos = signal<Product[]>([]);
  listadoCategorias = signal<Category[]>([]);

  @Input() category_id?: string;

  //cart = signal<Product[]>([]);

  private cartService = inject(CartService);
  cart = this.cartService.cart;

  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(cambios: SimpleChanges) {
    this.getProducts();
  }

  addProduct(product: Product) {
    this.cartService.addProduct(product);
  }

  private getCategories() {
    this.categoryService.getAll().subscribe({
      next: (data) => {
        console.log(data);
        this.listadoCategorias.set(data);
      },
      error: (e) => {
        console.error(e);
      }
    });
  }

  private getProducts() {
    this.productService.getAllProducts(this.category_id).subscribe({
      next: (data) => {
        console.log(data);
        this.listadoProductos.set(data);
      },
      error: (e) => {
        console.error(e);
      }
    })
  }

}
