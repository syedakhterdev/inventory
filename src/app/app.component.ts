import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks: any[];
  title = 'test-app';
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Inventory',
        link: 'inventory'
      },
      {
        label: 'Search',
        link: 'search'
      }
    ];
  }
}
