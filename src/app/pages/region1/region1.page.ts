import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-region1',
  templateUrl: './region1.page.html',
  styleUrls: ['./region1.page.scss'],
})
export class Region1Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  bangui() {
    this.router.navigate(['bangui']);
  }

  vigan() {
    this.router.navigate(['vigan']);
  }

  hundredislands() {
    this.router.navigate(['hundredislands']);
  }

}
