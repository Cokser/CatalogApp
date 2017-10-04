import { Component, OnInit } from '@angular/core';

import { CatalogService } from "./services/catalog.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Catalog App';

  productsArray: any;

  constructor(private catalogService: CatalogService) { }

  ngOnInit(){

    this.catalogService.getProducts().subscribe(
      array => this.productsArray = array);
  }

}
