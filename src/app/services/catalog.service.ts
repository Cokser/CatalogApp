import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response}  from '@angular/http';
import { Product } from '../components/product/product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CatalogService {

  private productsUrl: string = 'assets/products.json';
  products: any;
  pagesRange: number = 3;

  constructor( private http: Http ){ }

  public getProducts(): Observable<Product[]> {

    this.products = this.http.get(this.productsUrl)

      .map((resp: Response) => {
        let productsList = resp.json().data;

        let productsArray: Product[] = [];

        for (let index in productsList) {

          let product = productsList[index];

          productsArray.push({

            id: product.id,
            price: product.price,
            sizes: product.sizes,
            sex: product.sex,
            colors: product.colors,
            type: product.type,
            img: product.img,
            big: product.big

          });
        }

        return productsArray;

      });

    return this.products;

  }

  public sortProducts(array) {

    let sortedProducts = [],
      power = Math.ceil(array.length / this.pagesRange),
      flag = 0;

    for ( let i = 0; i < power; i++ ) {

      let temp = [];

      for ( let j = 0; j < this.pagesRange; j++ ) {

        temp.push(array[flag]);

        flag++;

        if ( flag === array.length ) {break;}

      }
      sortedProducts.push(temp);

    }

    flag = 0;

    return sortedProducts;

  }
}