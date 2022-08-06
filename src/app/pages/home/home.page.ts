import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

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

}
