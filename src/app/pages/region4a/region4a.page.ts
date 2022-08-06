import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-region4a',
  templateUrl: './region4a.page.html',
  styleUrls: ['./region4a.page.scss'],
})
export class Region4aPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  aguinaldoshrine() {
    this.router.navigate(['aguinaldoshrine']);
  }

  pagsanjan() {
    this.router.navigate(['pagsanjan']);
  }

  taal() {
    this.router.navigate(['taal']);
  }

}
