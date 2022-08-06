import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taal2',
  templateUrl: './taal2.page.html',
  styleUrls: ['./taal2.page.scss'],
})
export class Taal2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  profile() {
    this.router.navigate(['profile']);
  }

}
