import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {

    let values = value.split(' ')
    let results = '';

    for (let v of values) {
      results += this.capitalize(v) + (' ');
    }
    return results;
  }

  capitalize(value: string) {
    return value.substring(0,1).toUpperCase() +
    value.substring(1).toLocaleLowerCase()
  }

}
