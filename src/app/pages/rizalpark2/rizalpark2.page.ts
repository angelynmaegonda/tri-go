import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rizalpark2',
  templateUrl: './rizalpark2.page.html',
  styleUrls: ['./rizalpark2.page.scss'],
})
export class Rizalpark2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  profile() {
    this.router.navigate(['profile']);
  }

  johnofthecross() {
    this.router.navigate(['johnofthecross']);
  }

}
