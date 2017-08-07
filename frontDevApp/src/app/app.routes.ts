import { Routes } from "@angular/router";
import { CatalogComponent } from "./components/catalog/catalog.component";
import { ProductComponent } from "./components/product/product.component"

export const routes: Routes = [
  {
    path: "",
    redirectTo: "catalog",
    pathMatch: "full"
  },
  {
    path: "catalog",
    component: CatalogComponent
  },
  {
    path: "product/:id",
    component: ProductComponent
  }

];