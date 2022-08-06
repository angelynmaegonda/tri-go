import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-region2',
  templateUrl: './region2.page.html',
  styleUrls: ['./region2.page.scss'],
})
export class Region2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  batanes() {
    this.router.navigate(['batanes']);
  }

  capeengano() {
    this.router.navigate(['capeengano']);
  }

  cagua() {
    this.router.navigate(['cagua']);
  }

}
