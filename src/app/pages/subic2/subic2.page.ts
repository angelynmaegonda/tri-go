import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subic2',
  templateUrl: './subic2.page.html',
  styleUrls: ['./subic2.page.scss'],
})
export class Subic2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  profile() {
    this.router.navigate(['profile']);
  }

}
