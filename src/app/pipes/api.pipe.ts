import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'api',
  standalone: true
})
export class ApiPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
