import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string): string {
    let fechaActual = new Date();
    let fechaCreacion = new Date(value);
    return formatDistance(fechaActual, fechaCreacion);
  }

}
