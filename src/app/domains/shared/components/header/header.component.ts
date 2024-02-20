import { Component, signal } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterLinkWithHref } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkActive, RouterModule, RouterLinkWithHref],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  cart = signal<Product[]>([]);

}
