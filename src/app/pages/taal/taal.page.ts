import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taal',
  templateUrl: './taal.page.html',
  styleUrls: ['./taal.page.scss'],
})
export class TaalPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  taal2() {
    this.router.navigate(['taal2']);
  }

}
