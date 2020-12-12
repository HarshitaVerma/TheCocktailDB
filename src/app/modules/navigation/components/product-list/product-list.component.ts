import { FilterComponent } from './../filter/filter.component';
import { NavigationService } from './../../navigation.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  arrDrinks;
  arrAll = [];
  searchText = '';
  constructor(public router: Router, public navSer: NavigationService, public dialog: MatDialog) {
    this.getProductList();
  }

  ngOnInit(): void {}
  sortComponent() {}
  filterComponent() {
    let filterDialog = this.dialog.open(FilterComponent, {
      height: '528px',
      width: '350px',
      panelClass: 'filterPanel'
    });
    filterDialog.afterClosed().subscribe(filter => {
      if (filter.length) {
        this.navSer.getFilteredProductList(filter).subscribe(filtdata => {
          if (filtdata) {
            let tempArr = [];
            this.arrDrinks = [];
            filtdata.forEach(frst => {
              frst['drinks'].forEach(secomd => {
                tempArr.push(secomd);
              });
            });
            tempArr.forEach(thrd => {
              this.arrDrinks.push(thrd);
            });
            console.log('filtdata', filtdata);
            console.log('tempArr', tempArr);
            console.log('arrDrinks', this.arrDrinks);
          }
        });
      } else {
        this.getProductList();
      }
    });
  }
  productDetails(currentIndex) {
    this.router.navigate(['/cocktailDetail', { id: currentIndex.idDrink }]);
  }
  getProductList() {
    this.navSer.getProductList().subscribe(res => {
      if (res) {
        this.arrDrinks = res['drinks'];
      }
    });
  }
}
