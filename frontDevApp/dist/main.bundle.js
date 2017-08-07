webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<header class=\"header-block\">\n  <div class=\"logo\"></div>\n</header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  background-color: #fff;\n  width: 100%;\n  height: 119px; }\n\n.logo {\n  background-image: url(" + __webpack_require__("../../../../../src/app/app.images/logo.png") + ");\n  width: 200px;\n  height: 66px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.images/logo.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logo.a263fd9b0b7802833878.png";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_catalog_catalog_component__ = __webpack_require__("../../../../../src/app/components/catalog/catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_gallery_gallery_component__ = __webpack_require__("../../../../../src/app/components/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_gallery_filter_pipe__ = __webpack_require__("../../../../../src/app/components/gallery/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_product_product_component__ = __webpack_require__("../../../../../src/app/components/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_catalog_catalog_service__ = __webpack_require__("../../../../../src/app/components/catalog/catalog.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_catalog_catalog_component__["a" /* CatalogComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_gallery_gallery_component__["a" /* GalleryComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_gallery_filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_9__components_product_product_component__["a" /* ProductComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_routes__["a" /* routes */]),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__components_catalog_catalog_service__["a" /* CatalogService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_catalog_catalog_component__ = __webpack_require__("../../../../../src/app/components/catalog/catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_product_product_component__ = __webpack_require__("../../../../../src/app/components/product/product.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });


var routes = [
    {
        path: "",
        redirectTo: "catalog",
        pathMatch: "full"
    },
    {
        path: "catalog",
        component: __WEBPACK_IMPORTED_MODULE_0__components_catalog_catalog_component__["a" /* CatalogComponent */]
    },
    {
        path: "product/:id",
        component: __WEBPACK_IMPORTED_MODULE_1__components_product_product_component__["a" /* ProductComponent */]
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"main-block\">\n  <div class=\"filters-container\">\n    <section class=\"filters-block\">\n      <div class=\"filters\">\n        <div class=\"filters-checkboxes\">\n          <div class=\"filter\">\n            <input type=\"checkbox\" [(ngModel)]=\"showMen\" id=\"sex-men\" class=\"gallery-filter\">\n            <label for=\"sex-men\" class=\"filter-label\">men</label>\n          </div>\n          <div class=\"filter\">\n            <input type=\"checkbox\" [(ngModel)]=\"showWomen\" id=\"sex-women\" class=\"gallery-filter\">\n            <label for=\"sex-women\" class=\"filter-label\">women</label>\n          </div>\n          <div class=\"filter\">\n            <input type=\"checkbox\" [(ngModel)]=\"showChildren\" id=\"children\" class=\"gallery-filter\">\n            <label for=\"children\" class=\"filter-label\">children</label>\n          </div>\n        </div>\n        <button class=\"filter-all\" (click)=\"showAll()\">see all products</button>\n      </div>\n    </section>\n  </div>\n  <div class=\"sort-wrapper\">\n    <div class=\"sort-container\">\n      <label for=\"sort-gallery\" class=\"sort-label\">sort by</label>\n      <select name=\"sort\" [(ngModel)]=\"sortTitle\" (change)=\"changeSort(sortTitle)\" id=\"sort-gallery\" class=\"sort\">\n        <option value=\"price\" class=\"sort-option\">price</option>\n        <option value=\"type\" class=\"sort-option\">name</option>\n      </select>\n    </div>\n  </div>\n  <div *ngIf=\"showMen\" class=\"gallery-wrapper\">\n    <gallery [sexFilter]=\"menFilter\" ></gallery>\n  </div>\n  <div *ngIf=\"showWomen\" class=\"gallery-wrapper\">\n    <gallery [sexFilter]=\"womenFilter\"></gallery>\n  </div>\n</main>"

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  background-color: #fff;\n  width: 100%;\n  height: 1451px; }\n\n.filters-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n  background-color: #f5f6f7;\n  width: 100%; }\n\n.filters-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.filters-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  width: 1090px;\n  height: 143px; }\n\n.filters-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 402px; }\n\n.filter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.filters {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 52px;\n  width: 100%; }\n\n.gallery-filter {\n  color: #aa9b77;\n  width: 25px;\n  height: 24px;\n  margin-right: 17px; }\n\n.filter-label {\n  text-transform: uppercase;\n  font-size: 18px;\n  color: #333333; }\n  .filter-label:before {\n    border: 2px solid #a99b77;\n    box-sizing: border-box; }\n  .filter-label:after {\n    border: 3px solid blue; }\n\n.filter-all {\n  height: 52px;\n  width: 205px;\n  border-radius: 4px;\n  background-color: #a99b77;\n  font-size: 14px;\n  color: #fff;\n  cursor: pointer;\n  text-transform: uppercase; }\n\n.sort-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  width: 1090px;\n  height: 87px; }\n\n.sort-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  width: 175px; }\n\n.sort {\n  width: 75px;\n  text-transform: uppercase;\n  font-size: 16px;\n  color: #424242;\n  background: #fff;\n  border: 13px; }\n\n.sort-label {\n  text-transform: uppercase;\n  font-size: 20px;\n  background: #f5f6f7; }\n\n.sort-option {\n  text-transform: uppercase;\n  font-size: 16px;\n  color: #424242;\n  background: #f5f6f7; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery_gallery_component__ = __webpack_require__("../../../../../src/app/components/gallery/gallery.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CatalogComponent = (function () {
    function CatalogComponent() {
        this.sortTitle = "price";
        this.showMen = false;
        this.showWomen = false;
        this.showChildren = false;
        this.menFilter = "men";
        this.womenFilter = "women";
        this.childrenFilter = "children";
    }
    CatalogComponent.prototype.changeSort = function (target) {
        this.gallerys.forEach(function (x) { return x.showSort(target); });
    };
    CatalogComponent.prototype.showAll = function () {
        this.showMen = true;
        this.showWomen = true;
        this.showChildren = true;
    };
    return CatalogComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1__gallery_gallery_component__["a" /* GalleryComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* QueryList */]) === "function" && _a || Object)
], CatalogComponent.prototype, "gallerys", void 0);
CatalogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'catalog',
        template: __webpack_require__("../../../../../src/app/components/catalog/catalog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/catalog/catalog.component.scss")],
        providers: [],
    })
], CatalogComponent);

var _a;
//# sourceMappingURL=catalog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CatalogService = (function () {
    function CatalogService(http) {
        this.http = http;
    }
    CatalogService.prototype.getProducts = function () {
        var _this = this;
        return this.http.get('assets/products.json')
            .map(function (resp) {
            var productsList = resp.json().data;
            var products = [];
            for (var index in productsList) {
                var product = productsList[index];
                products.push({ id: product.id, price: product.price, sizes: product.sizes, sex: product.sex, colors: product.colors, type: product.type, img: product.img, big: product.big });
            }
            _this.myProducts = products;
            return products;
        });
    };
    return CatalogService;
}());
CatalogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CatalogService);

var _a;
//# sourceMappingURL=catalog.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/gallery/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (products, sex) {
        if (sex === undefined)
            return products;
        return products.filter(function (product) {
            return product.sex === sex;
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'filter',
        pure: false
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery-container\">\n  <div class=\"{{ 'header-title-' + sexFilter }}\">\n    <div class=\"gallery-title\">{{sexFilter}}</div>\n    <div class=\"paragraph\"></div>\n  </div>\n  <div class=\"{{ 'nav-' + sexFilter }}\">\n    <div class=\"product-nav\">\n      <p class=\"product-page\">{{ currentPage + '/' + products.length }}</p>\n      <div class=\"nav-buttons\">\n        <button (click)=\"setPage('minus')\" class=\"nav-button\"> < </button>\n        <button (click)=\"setPage('plus')\" class=\"nav-button\"> > </button>\n      </div>\n    </div>\n  </div>\n  <section class=\"gallery-block\">\n    <article *ngFor=\"let product of ( products | filter: sexFilter )\" class=\"products\">\n      <figure  class=\"product\">\n        <div class=\"product-header\">\n          <div class=\"product-sizes\">\n            <label class=\"size-title\" for=\"{{ 'size-for-' + product.id }}\">sizes</label>\n            <select id=\"{{ 'size-for-' + product.id }}\" class=\"sizes\">\n              <option class=\"product-size\" *ngFor=\"let size of product.sizes\">{{ size }}</option>\n            </select>\n          </div>\n          <div class=\"product-colors\">\n            <div *ngFor=\"let color of product.colors\" class=\"product-color {{ 'color-' + color }}\"></div>\n          </div>\n        </div>\n        <div class=\"product-img-container\">\n          <img class=\"product-img\" src=\"{{'assets/images/' + product.img}}\" alt=\"{{product.type}}\">\n        </div>\n        <div class=\"product-footer\">\n          <h3 class=\"product-type\">{{product.type}}</h3>\n          <p class=\"product-price\">{{product.price + '.00€'}}</p>\n        </div>\n        <div (click)=\"onSelect(product)\" [class.selected]=\"isSelected(product)\"class=\"product-link\"></div>\n      </figure>\n    </article>\n  </section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gallery-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  background-color: #fff;\n  width: 100%;\n  height: 490px; }\n\n.gallery-block {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: relative;\n  width: 1090px; }\n\n.header-title-men {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 1090px; }\n\n.header-title-women {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 1090px; }\n\n.gallery-title {\n  width: 100px;\n  font-size: 20px;\n  color: #424242;\n  font-weight: bold;\n  text-transform: uppercase; }\n\n.paragraph {\n  width: 993px;\n  height: 2px;\n  background: #cbcbcb; }\n\n.nav-men {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 1090px; }\n\n.nav-women {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 1090px; }\n\n.product-nav {\n  width: 32px;\n  height: 32px; }\n\n.nav-buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 20px;\n  height: 10px;\n  background-color: #fff; }\n  .nav-buttons .nav-button {\n    outline: none;\n    background-color: #fff; }\n\n.product {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n  background-color: #f5f6f7;\n  width: 320px;\n  height: 378px; }\n\n.product-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 267px;\n  height: 21px; }\n\n.product-sizes {\n  z-index: 2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.size-title {\n  margin-right: 10px;\n  background: #fff;\n  text-transform: uppercase; }\n\n.product-colors {\n  z-index: 3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.product-color {\n  border-radius: 50%;\n  margin-left: 5px;\n  width: 22px;\n  height: 22px; }\n  .product-color.color-155db9 {\n    background-color: #155db9; }\n  .product-color.color-ffe537 {\n    background-color: #ffe537; }\n  .product-color.color-535153 {\n    background-color: #535153; }\n  .product-color.color-535153 {\n    background-color: #535153; }\n  .product-color.color-d3a7ab {\n    background-color: #d3a7ab; }\n  .product-color.color-ffffff {\n    background-color: #ffffff; }\n\n.product-img-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 267px;\n  height: 287px; }\n\n.product-img {\n  width: 171px;\n  height: 215px; }\n\n.product-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 267px;\n  height: 20px; }\n\n.product-type {\n  text-transform: uppercase;\n  color: #aa9b77;\n  font-size: 18px; }\n\n.product-price {\n  text-transform: uppercase;\n  color: #424242;\n  font-size: 22px; }\n\n.product-link {\n  position: absolute;\n  cursor: pointer;\n  height: 100%;\n  width: 100%; }\n  .product-link:hover {\n    border: 6px solid #a99b77;\n    box-sizing: border-box; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__catalog_catalog_service__ = __webpack_require__("../../../../../src/app/components/catalog/catalog.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryComponent = (function () {
    function GalleryComponent(router, catalogService) {
        this.router = router;
        this.catalogService = catalogService;
        this.products = [];
        this.currentPage = 1;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catalogService.getProducts().subscribe(function (products) { return _this.products = products; });
    };
    GalleryComponent.prototype.isSelected = function (product) { return product.id === this.selectedId; };
    GalleryComponent.prototype.onSelect = function (product) {
        this.router.navigate(['/product', product.id]);
    };
    GalleryComponent.prototype.showSort = function (option) {
        this.products.sort(this.dynamicSort(option));
    };
    GalleryComponent.prototype.dynamicSort = function (property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    };
    GalleryComponent.prototype.setPage = function (opt) {
        if (opt === 'plus') {
            this.currentPage++;
        }
        else
            this.currentPage--;
    };
    return GalleryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], GalleryComponent.prototype, "sexFilter", void 0);
GalleryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'gallery',
        template: __webpack_require__("../../../../../src/app/components/gallery/gallery.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/gallery/gallery.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__catalog_catalog_service__["a" /* CatalogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__catalog_catalog_service__["a" /* CatalogService */]) === "function" && _b || Object])
], GalleryComponent);

var _a, _b;
//# sourceMappingURL=gallery.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-container\">\n  <div class=\"detail-wrapper\">\n    <div class=\"detail-header\">\n      <div (click)=\"gotoGallery()\" class=\"catalog-link\">\n        <p class=\"arrow\"> < </p>\n        <p class=\"back-link\">back to catalog</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"title-info\">\n    <div class=\"detail-title\">{{product.type}}</div>\n    <div class=\"paragraph\"></div>\n  </div>\n  <figure class=\"product\">\n    <div class=\"product-wrapper\">\n      <div class=\"product-img-container\">\n        <img class=\"product-img\" src=\"{{'assets/images/t-shirt-1-bg.png' }}\" alt=\"{{product.type}}\"> <!-- Здесь я вместо product.big, поставил прямое имя картинки, чтобы не искать новые-->\n      </div>\n      <section class=\"product-info\">\n        <div class=\"product-header\">\n          <div class=\"info-block\">\n            <p class=\"product-value\">{{ product.price + '.00€'}}</p>\n            <p class=\"product-key\">price</p>\n          </div>\n          <div class=\"info-block\">\n            <div class=\"product-colors\">\n              <div *ngFor=\"let color of product.colors\" class=\"product-color {{ 'color-' + color }}\"></div>\n            </div>\n            <p class=\"product-key\">colors</p>\n          </div>\n          <div class=\"info-block\">\n            <p class=\"product-value\">{{ product.sizes.slice(',') }}</p>\n            <p class=\"product-key\">sizes</p>\n          </div>\n        </div>\n      </section>\n    </div>\n  </figure>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/product/product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'Quicksand';\n  src: url(" + __webpack_require__("../../../../../src/assets/Quicksand-Bold.ttf") + ") format(\"ttf\"), url(" + __webpack_require__("../../../../../src/assets/quicksand-bold-webfont.woff") + ") format(\"woff\"); }\n\n.catalog-link {\n  cursor: pointer; }\n\n.detail-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n\n.detail-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #f5f6f7;\n  width: 100%;\n  height: 143px; }\n\n.detail-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  width: 1090px;\n  height: 143px; }\n\n.catalog-link {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  text-transform: uppercase;\n  font-weight: bold;\n  color: #333;\n  font-size: 18px;\n  height: 30px;\n  width: 220px; }\n\n.arrow {\n  margin-right: 10px; }\n\n.product {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 1030px;\n  width: 1090px;\n  border-radius: 2px;\n  border: 6px solid #a99b77; }\n\n.product-wrapper {\n  width: 450px;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n\n.product-colors {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.product-color {\n  border-radius: 50%;\n  margin-left: 5px;\n  width: 22px;\n  height: 22px; }\n  .product-color.color-155db9 {\n    background-color: #155db9; }\n  .product-color.color-ffe537 {\n    background-color: #ffe537; }\n  .product-color.color-535153 {\n    background-color: #535153; }\n  .product-color.color-535153 {\n    background-color: #535153; }\n  .product-color.color-d3a7ab {\n    background-color: #d3a7ab; }\n  .product-color.color-ffffff {\n    background-color: #ffffff; }\n\n.product-info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n\n.product-sizes-inner {\n  z-index: 3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.product-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.title-info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 1090px;\n  height: 200px; }\n\n.info-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 40px;\n  width: 300px; }\n\n.product-key, .product-value {\n  text-transform: uppercase;\n  font-size: 22px; }\n\n.product-value {\n  margin-right: 10px; }\n\n.detail-title {\n  width: 100px;\n  font-size: 20px;\n  color: #424242;\n  font-weight: bold;\n  text-transform: uppercase; }\n\n.paragraph {\n  width: 993px;\n  height: 2px;\n  background: #cbcbcb; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__catalog_catalog_service__ = __webpack_require__("../../../../../src/app/components/catalog/catalog.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = (function () {
    function ProductComponent(router, route, catalogService) {
        this.router = router;
        this.route = route;
        this.catalogService = catalogService;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var currentId = this.route.snapshot.params['id'];
        this.product = this.catalogService.myProducts.find(function (product) {
            if (product.id == currentId) {
                return product;
            }
        });
    };
    ProductComponent.prototype.gotoGallery = function () {
        this.router.navigate(['/catalog']);
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'product',
        template: __webpack_require__("../../../../../src/app/components/product/product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/product/product.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__catalog_catalog_service__["a" /* CatalogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__catalog_catalog_service__["a" /* CatalogService */]) === "function" && _c || Object])
], ProductComponent);

var _a, _b, _c;
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/assets/Quicksand-Bold.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Quicksand-Bold.0c04462696ac0fd3e85e.ttf";

/***/ }),

/***/ "../../../../../src/assets/quicksand-bold-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "quicksand-bold-webfont.69042727d843349e6592.woff";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map