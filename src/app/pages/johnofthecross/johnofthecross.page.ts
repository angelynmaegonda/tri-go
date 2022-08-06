import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-johnofthecross',
  templateUrl: './johnofthecross.page.html',
  styleUrls: ['./johnofthecross.page.scss'],
})
export class JohnofthecrossPage implements OnInit {

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

  rizalpark2() {
    this.router.navigate(['rizalpark2']);
  }

}
