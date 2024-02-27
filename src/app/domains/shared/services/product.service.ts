import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Usaremos este servicio para el CRUD de los productos

  private http = inject(HttpClient);

  getAllProducts() {
    //let url = new URL('https://api.escuelajs.co/api/v1/products?offset=0&limit=12');
    let url = new URL('https://api.escuelajs.co/api/v1/products');
    return this.http.get<Product[]>(url.toString());
  }

  getOneByID(miId?: string) {
    let url = new URL(`https://api.escuelajs.co/api/v1/products/${miId}`);
    return this.http.get<Product>(url.toString());
  }




}
