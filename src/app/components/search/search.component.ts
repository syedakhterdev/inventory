import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  data = [];
  searchInput: number;

  constructor(private dataService: DataService,
              private snackBar: MatSnackBar,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (resp: any) => {
        if (resp && resp.params.id) {
          const userId = resp.params.id;
          if (userId > 10) {
            this.showMessage('Please enter ID less then 10');
            this.router.navigate(['search']);
          }
          this.getFilterUser(userId);
        }
      }
    );
  }

  search() {
    if (this.searchInput > 10) {
    this.showMessage('Please enter ID less then 10');
    return;
    }
    this.router.navigate(['search/' + this.searchInput]);
  }
  getFilterUser(userId) {
    this.data = [];
    this.dataService.getUserById(userId).subscribe(
      (resp: any) => {
        this.data.push(resp);
      }
    );
  }
  showMessage(message) {
    this.snackBar.open(message, '', {
      duration: 3000
    });
  }
}
