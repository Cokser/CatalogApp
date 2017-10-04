import 'rxjs/add/operator/switchMap';
import { Component, OnInit  } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { CatalogService } from "../../services/catalog.service";
import { Product } from "./product";
import {Observable} from "rxjs/Observable";
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  product: Product;
  products: any[];
  currentProduct: any;
  constructor( private router: Router,
               private route: ActivatedRoute,
               private catalogService: CatalogService
  ){}

  ngOnInit() {

    let currentId = this.route.snapshot.params['id'];

    this.catalogService.getProducts().subscribe(
      (products)=>{

        this.products=products;

        this.currentProduct = this.products.find(function (product) {

          if (product.id == currentId) {

            return product;

          }
        });
      });
  }

  gotoGallery() {

    this.router.navigate(['/catalog']);

  }
}
