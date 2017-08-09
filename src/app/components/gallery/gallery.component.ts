import {Component, OnInit, Input} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { CatalogService } from '../catalog/catalog.service';
import { Product } from '../product/product';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})

export class GalleryComponent implements OnInit {
  @Input()
  sexFilter: string;

  products: Product[]=[];
  currentPage: number = 1;
  pagesCount: number;
  private selectedId: number;

  constructor( private router: Router,
               private catalogService: CatalogService
  ){}

  ngOnInit(){
    this.catalogService.getProducts().subscribe(
      (products)=>this.products=products);
  }
  isSelected(product: Product) { return product.id === this.selectedId; }

  onSelect( product: Product ) {
    this.router.navigate(['/product', product.id]);
  }

  showSort(option){
    this.products.sort(this.dynamicSort(option));
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
  setPage(opt) {
    if( opt === 'plus' ) {
      this.currentPage++;
    } else this.currentPage--;
  }

}
