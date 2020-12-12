import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  host: {
    '(document:click)': 'onClick($event)'
  }
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  showMenu() {
    document.getElementById('navbar-collapse').classList.remove('collapse');
    document.getElementById('navbar-collapse').style.display = 'block';
  }
  onClick(event) {
    if (event.target.id !== 'menubtn') {
      document.getElementById('navbar-collapse').classList.add('collapse');
      document.getElementById('navbar-collapse').style.display = 'none';
    }
  }
}
