import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ncr',
  templateUrl: './ncr.page.html',
  styleUrls: ['./ncr.page.scss'],
})
export class NcrPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  malacanang() {
    this.router.navigate(['malacanang']);
  }

  rizalpark() {
    this.router.navigate(['rizalpark']);
  }

  intramuros() {
    this.router.navigate(['intramuros']);
  }

}
