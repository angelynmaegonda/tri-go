import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  region1() {
    this.router.navigate(['region1']);
  }

  cordillera() {
    this.router.navigate(['cordillera']);
  }

  region2() {
    this.router.navigate(['region2']);
  }

  region3() {
    this.router.navigate(['region3']);
  }

  ncr() {
    this.router.navigate(['ncr']);
  }

  region4a() {
    this.router.navigate(['region4a']);
  }

  region4b() {
    this.router.navigate(['region4b']);
  }

  region5() {
    this.router.navigate(['region5']);
  }

}
