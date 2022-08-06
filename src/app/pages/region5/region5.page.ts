import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-region5',
  templateUrl: './region5.page.html',
  styleUrls: ['./region5.page.scss'],
})
export class Region5Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  mayon() {
    this.router.navigate(['mayon']);
  }

  cagsawa() {
    this.router.navigate(['cagsawa']);
  }

  matnog() {
    this.router.navigate(['matnog']);
  }

}
