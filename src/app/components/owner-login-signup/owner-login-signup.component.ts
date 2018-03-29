import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallsService } from '../../services/api-calls.service';

@Component({
  selector: 'app-owner-login-signup',
  templateUrl: './owner-login-signup.component.html',
  styleUrls: ['./owner-login-signup.component.css']
})
export class OwnerLoginSignupComponent implements OnInit {

  mobile: any;
  password: any;
  response: any;

  constructor(private api: ApiCallsService, private router: Router) { }
  customer = {
    'mobile': this.mobile,
    'password': this.password
  }

  ngOnInit() {
  }

  loginCustomer(customer) {
    console.log(customer);
    if (customer.mobile == '' || customer.password == '' || customer.mobile == undefined || customer.password == undefined) {
      alert("Mobile and Password should not be empty..");
      return false;
    } else {
      this.api.ownerLogin(customer)
        .subscribe(
          response => {
            if (response && response['status'] == 200) {
              localStorage.setItem("userData", JSON.stringify(response));
              this.router.navigateByUrl('/owner_home');
            }
            if (response && !response['data']){
              alert(response['message']);
            }
          },
          error => {
            console.log(error);
            alert("Someting went wrong please try again.");
          }
        );
    }
  }

}
