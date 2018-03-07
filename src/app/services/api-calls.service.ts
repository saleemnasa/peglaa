import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Globals } from '../constants/app.globals';


@Injectable()
export class ApiCallsService {

  constructor(private http: HttpClient, private global: Globals) { }
  cars = [
    'Ford', 'Chevrolet', 'Buick'
  ];
  options = {
    headers: new HttpHeaders({
      // 'Content-Type': 'application/json',
      'x-auth-token': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYWxlZW1AYWRtaW4uY29tIiwiYXVkaWVuY2UiOiJ3ZWIiLCJjcmVhdGVkIjoxNTIwMzQwMjEzNTkzLCJyb2xlcyI6IlNUQVJUOkFETUlOOkVORCIsImV4cCI6MTUyMDM2OTAxMywidXNlcklkIjoxLCJpYXQiOjE1MjAzNDAyMTN9.AeaYP_TUEOIXZgmMGZEWFwxma5FaLWiB-ExiI8FU5kVBdazh93b5X2B-8XIBYO4ok3TEPnTTwB35-a2niaf3iw',
      'sessionless': 'true'
    })
  };

  getAllShops() {
    console.log(this.options)
    return this.http.get('http://www.peglaa.com/api/v1/shop', this.options)
  }


  myData() {
    return 'This is my data, man!';
  }

}
