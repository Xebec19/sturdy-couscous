import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(text:string, length=15): string {
    return text.length > length ? text.slice(0,length) + '...' : text;
  }

}
