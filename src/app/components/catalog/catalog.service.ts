import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response}  from '@angular/http';
import { Product } from '../product/product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CatalogService {
  myProducts: any;
  constructor( private http: Http){ }

  getProducts() : Observable<Product[]>{
    return this.http.get('assets/products.json')
      .map((resp:Response)=>{

        let productsList = resp.json().data;
        let products :Product[] = [];

        for(let index in productsList){
          let product = productsList[index];
          products.push({ id:product.id , price:product.price , sizes:product.sizes, sex:product.sex, colors:product.colors, type:product.type, img:product.img, big:product.big });
        }
        this.myProducts = products;
        return products;
      });
  }
}