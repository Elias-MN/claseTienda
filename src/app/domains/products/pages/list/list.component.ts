import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  listadoProductos = [
    {
      titulo: "Camiseta",
      imagen: "https://picsum.photos/200/200?r=1",
      precio: 100
    },
    {
      titulo: "Pantalon",
      imagen: "https://picsum.photos/200/200?r=2",
      precio: 60
    },
    {
      titulo: "Zapatillas",
      imagen: "https://picsum.photos/200/200?r=3",
      precio: 30
    }

  ];

  add(event: string) {
    console.log(event);
  }

}
