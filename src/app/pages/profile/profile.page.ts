import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  home() {
    this.router.navigate(['home']);
  }

  articles() {
    this.router.navigate(['articles']);
  }

  profile() {
    this.router.navigate(['profile']);
  }

  login() {
    this.router.navigate(['login']);
  }

  taal2() {
    this.router.navigate(['taal2']);
  }

  rizalpark2() {
    this.router.navigate(['rizalpark2']);
  }

  subic2() {
    this.router.navigate(['subic2']);
  }

}
