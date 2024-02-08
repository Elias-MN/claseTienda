import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  listadoProductos = signal<Product[]>([
    {
      id: 0,
      title: "Camiseta",
      image: "https://picsum.photos/200/200?r=1",
      price: 100
    },
    {
      id: 1,
      title: "Pantalon",
      image: "https://picsum.photos/200/200?r=2",
      price: 60
    },
    {
      id: 2,
      title: "Zapatillas",
      image: "https://picsum.photos/200/200?r=3",
      price: 30
    }

  ]);

  add(event: string) {
    console.log(event);
  }

}
