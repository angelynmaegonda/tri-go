import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-region3',
  templateUrl: './region3.page.html',
  styleUrls: ['./region3.page.scss'],
})
export class Region3Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  subic() {
    this.router.navigate(['subic']);
  }

  pinatubo() {
    this.router.navigate(['pinatubo']);
  }

  samat() {
    this.router.navigate(['samat']);
  }

}
