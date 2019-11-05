import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tax'
})
export class TaxPipe implements PipeTransform {

  transform(value: any,taxpercentage : any): any {
    return value * taxpercentage;
  }

}
