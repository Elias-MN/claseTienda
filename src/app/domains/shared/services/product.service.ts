import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Usaremos este servicio para el CRUD de los productos

  private http = inject(HttpClient);

  getAllProducts(category_id?: string) {

    let url = new URL('https://api.escuelajs.co/api/v1/products');

    if (category_id) {
      url.searchParams.set('categoryId', category_id);
    }

    return this.http.get<Product[]>(url.toString());
  }

  getOneByID(miId?: string) {
    let url = new URL(`https://api.escuelajs.co/api/v1/products/${miId}`);
    return this.http.get<Product>(url.toString());
  }




}
