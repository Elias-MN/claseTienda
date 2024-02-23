import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[ocultar]',
  standalone: true
})
export class HideDirective {

  element = inject(ElementRef);

  @HostListener('mouseover')
  onMouseOver() {
    this.element.nativeElement.style.display = "none";
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.element.nativeElement.style.display = "block";
  }


}
