import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { HighlightDirective } from '@shared/directives/highlight.directive';
import { HideDirective } from '@shared/directives/hide.directive';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, TimeAgoPipe, ReversePipe, HighlightDirective, HideDirective, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  // Estos son elementos que enviamos al template hijo
  @Input({ required: true }) product!: Product;

  // Estos son elementos que recibimos del template hijo
  // Es como crear un evento click personalizado
  @Output() addToCart = new EventEmitter();

  // Controlar que evento desatará la comunicación
  addProduct() {
    console.log("Click en el hijo");
    // Enviamos comunicación al padre, debemos enlazar este evento como parámetro
    this.addToCart.emit(this.product);
  }

}
