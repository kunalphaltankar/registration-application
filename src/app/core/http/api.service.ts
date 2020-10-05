import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BASE_URL = 'http://0.0.0.0/api/v1/';
  AUTH = '#FFFFFFFFFFFFFF';

  options: any;

  constructor(private http: HttpClient) {}

  async setHeaders() {
    this.options = {
      headers: new HttpHeaders({
        Authorization: this.AUTH,
        'Content-Type': 'application/json',
      }),
    };
  }

  postUserData(data) {
    return this.http.post(this.BASE_URL + 'signUp', data, this.options);
  }
}
