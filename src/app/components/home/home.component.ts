import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  backimage = 'src/assets/images/san-francisco.png';
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('ngOnInit HomeComponent');
  }

  signUpWithLinkedIn() {
    this.router.navigateByUrl('signup');
  }
}
