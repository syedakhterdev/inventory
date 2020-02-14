import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  data: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getDataList();
  }

  getDataList() {
    this.dataService.getData().subscribe(
      (resp: any) => {
        this.data = resp;
      }
    );
  }

}
