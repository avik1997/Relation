import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squareRoots'
})
export class SquareRootsPipe implements PipeTransform {

  transform(value:number): Number {

    const result = Math.sqrt(value);
  
    return result;
  }

}
