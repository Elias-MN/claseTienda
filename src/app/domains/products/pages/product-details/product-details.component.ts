import { Component, Input, inject } from '@angular/core';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export default class ProductDetailsComponent {

  // La ? es para indicar que puede o no venir un Input
  @Input() id?: string;
  private productService = inject(ProductService)
  ngOnInit() {
    if (this.id) {
      console.log(this.id);
      this.productService.getOneByID(this.id).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (e) => {
          console.log(e);
        }
      })
    }
  }

}
