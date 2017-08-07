import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {

  transform( products: any, sex: string ): any {
    if ( sex === undefined ) return products;

    return products.filter(function (product) {
      return product.sex === sex;
    });
  }
}