import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/http/api.service';

interface UserDataType {
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less'],
})
export class SignUpComponent implements OnInit {
  userData: UserDataType;

  constructor(private router: Router, private api: ApiService) {}

  ngOnInit(): void {
    console.log('ngOnInit SignUpComponent');

    //set up an OAuth 2 get username and email from linkedIn

    this.userData = {
      name: 'John Doe',
      email: 'john@requantive.com',
      phone: '',
    };
  }

  signUp() {
    console.log(this.userData);
    if (this.userData.phone.length == 0) {
      alert('Please Enter Phone Number.');
      return;
    }

    this.postUserData();

    //mimicking an api call
    setTimeout(() => {
      this.router.navigate(['success']);
    }, 3000);
  }

  postUserData() {
    this.api.setHeaders();
    this.api.postUserData(this.userData).subscribe(
      (data) => {
        this.router.navigate(['success']);
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
