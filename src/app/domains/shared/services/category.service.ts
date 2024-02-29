import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '@shared/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient);

  getAll() {
    let url = new URL('https://api.escuelajs.co/api/v1/categories');
    return this.http.get<Category[]>(url.toString());
  }

}
