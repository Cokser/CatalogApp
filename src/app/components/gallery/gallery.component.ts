import {Component, OnInit, Input} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

import { CatalogService } from '../../services/catalog.service';
import { Product } from '../product/product';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: []
})

export class GalleryComponent implements OnInit {

  @Input()
  sexFilter: string;

  products: Product[]=[];
  currentPage: number = 1;
  productsArray: any[];


  private selectedId: number;

  constructor( private router: Router,
               private catalogService: CatalogService ){}

  ngOnInit(){

    this.catalogService.getProducts()

      .subscribe((products)=>{

      this.products=products

            .filter((product) => {

              return product.sex === this.sexFilter;

            });

          this.productsArray = this.catalogService.sortProducts(this.products);
          this.showSort('price');
        }
      );
  }

  isSelected(product: Product) { return product.id === this.selectedId; }

  onSelect( product: Product ) {

    this.router.navigate(['/product', product.id]);

  }

  showSort(option){

    this.products.sort(this.dynamicSort(option));

    this.productsArray = this.catalogService.sortProducts(this.products);

  }

  dynamicSort(property) {

    let sortOrder = 1;

    if(property[0] === "-") {

      sortOrder = -1;

      property = property.substr(1);

    }

    return function (a,b) {

      let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;

      return result * sortOrder;
    }
  }

  ceilFun(num){

    return Math.ceil(num);

  }

  setPage(opt) {

    if( opt === 'plus' ) {

      if( this.currentPage < this.ceilFun( this.products.length / 3)){

        return this.currentPage++;

      }

    } else if( this.currentPage > 1 ){

      return this.currentPage--;

    }
  }
}
