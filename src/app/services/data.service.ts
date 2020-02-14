import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apiService: ApiService,
              private http: HttpClient) {
          }
  getData() {
    return this.http.get(this.apiService.getRoute('users'));
  }
  getUserById(id) {
    return this.http.get(this.apiService.getRoute('users/' + id));
  }
}
