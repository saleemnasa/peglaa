import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-login-signup',
  templateUrl: './customer-login-signup.component.html',
  styleUrls: ['./customer-login-signup.component.css']
})
export class CustomerLoginSignupComponent implements OnInit {

  mobile: any;
  password: any;
  constructor() { }
  customer = {
    'mobile': this.mobile,
    'password': this.password
  }

  ngOnInit() {
  }

  loginCustomer(customer) {
    console.log(customer);
  }

}
