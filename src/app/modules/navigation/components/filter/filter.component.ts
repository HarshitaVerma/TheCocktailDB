import { MatDialogRef } from '@angular/material/dialog';
import { NavigationService } from './../../navigation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  arrFilter;
  arrCategory;
  selectedFilter = [];
  show1: boolean = false;
  show2: boolean = false;
  show3: boolean = false;
  show4: boolean = false;
  constructor(public navServ: NavigationService, public dialog: MatDialogRef<FilterComponent>) {
    this.navServ.getAllFilters().subscribe(resp => {
      this.arrFilter = resp;
    });
  }

  ngOnInit(): void {}
  applyFilter() {
    this.dialog.close(this.selectedFilter);
    console.log(this.selectedFilter);
  }

  selectFilter(event, name, catType?) {
    if (event.target.checked) {
      this.selectedFilter.push(`${catType}=${name}`);
    } else {
      let spliceIndex = this.selectedFilter.indexOf(name);
      this.selectedFilter.splice(spliceIndex, 1);
    }
  }
  clearFilter() {
    let checkedBox = document.getElementsByClassName('active-checkbox');
    for (let i = 0; i < checkedBox.length; i++) {
      checkedBox[i]['checked'] = false;
    }
    this.selectedFilter = [];
  }
}
