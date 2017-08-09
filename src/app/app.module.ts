import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FilterPipe } from './components/gallery/filter.pipe';
import { ProductComponent } from './components/product/product.component';
import { routes } from "./app.routes";
import { CatalogService } from "./components/catalog/catalog.service"

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    GalleryComponent,
    FilterPipe,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
