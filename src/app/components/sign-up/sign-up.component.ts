import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less'],
})
export class SignUpComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  signUp() {
    this.router.navigate(['success']);
  }
}
