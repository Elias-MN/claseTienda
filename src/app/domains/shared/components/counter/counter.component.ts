import { Component, Input, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  counter = signal(0);
  counterInterval: number | undefined;

  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = "";


  // Se ejecuta una sola vez
  // Se ejecuta ANTES de renderizar el componente
  // Generalmente usado para asignar valores por defecto
  // NO INCLUIR nada ASÍNCRONO
  constructor() {
    // Antes del render
    console.log('Constructor');
    console.log('-'.repeat(10));
  }

  // Se ejecuta una sola vez
  // Se ejecuta DESPUÉS de renderizar el componente
  // PERMITE operaciones ASÍNCRONAS
  // Es más usado que los constructores
  ngOnInit() {
    // Después del render
    console.log('ngOnInit');
    console.log('-'.repeat(10));

    this.counterInterval = window.setInterval(() => {
      this.counter.update(value => value + 1);
      console.log("intervalo");
    }, 1000);

  }

  // Se ejecuta antes y durante de renderizar el componente
  // Detecta cambios y los notifica
  ngOnChanges(cambios: SimpleChanges) {
    // Antes y durante del render
    console.log('ngOnChanges');
    console.log(cambios);
    console.log('-'.repeat(10));

    let duracion = cambios['duration'];
    if (duracion && duracion.previousValue !== duracion.currentValue) {
      console.log("Ha cambiado la duración!");
    }

  }

  // Se ejecuta cuando todos los hijos dentro de este componente,
  // han sido renderizados
  ngAfterViewInit() {
    // Después del render
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  // Cuando el componente se destruye, por ejemplo, cuando tras un
  // @if, el componente no cumple la condición y no se renderiza
  ngOnDestroy() {
    // Después del render
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));

    // Esto previene fugas de memoria
    window.clearInterval(this.counterInterval);
  }

}
