import {Component, QueryList, ViewChildren} from '@angular/core';
import { GalleryComponent } from "../gallery/gallery.component"

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [],
})
export class CatalogComponent {
  sortTitle: string = "price";
  showMen: boolean = false;
  showWomen: boolean = false;
  showChildren: boolean = false;
  menFilter: string = "men";
  womenFilter: string = "women";
  childrenFilter: string = "children";

  @ViewChildren(GalleryComponent)
  gallerys: QueryList<GalleryComponent>;

  changeSort(target) {
    this.gallerys.forEach(x => x.showSort(target));
  }
  showAll() {
    this.showMen = true;
    this.showWomen = true;
    this.showChildren = true;
  }
}
