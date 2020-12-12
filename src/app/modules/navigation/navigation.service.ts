import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  productListUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
  productIdUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
  categoryUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  glassUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list';
  ingredientUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  alcoholicUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list';
  filterProductsUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?';

  constructor(private http: HttpClient) {}

  getProductList() {
    return this.http.get(this.productListUrl);
  }
  getProductById(id) {
    return this.http.get(this.productIdUrl + id);
  }

  getFilteredProductList(filter) {
    let getArr = [];
    getArr = filter.map(elem => {
      return this.http.get(this.filterProductsUrl + elem);
    });
    return forkJoin(...[getArr]);
  }

  /** Filter */

  getAllFilters() {
    let cat = this.http.get(this.categoryUrl);
    let glass = this.http.get(this.glassUrl);
    let ingr = this.http.get(this.ingredientUrl);
    let alco = this.http.get(this.alcoholicUrl);
    return forkJoin([cat, glass, ingr, alco]);
  }
}
