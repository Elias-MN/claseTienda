import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/components/counter/counter.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {

  duracion = signal(100);
  mensaje = signal("DWEC");

  cambiarDuracion(event: Event) {
    let input = event.target as HTMLInputElement;
    this.duracion.set(input.valueAsNumber);
  }

  cambiarMensaje(event: Event) {
    let input = event.target as HTMLInputElement;
    this.mensaje.set(input.value);
  }

}
