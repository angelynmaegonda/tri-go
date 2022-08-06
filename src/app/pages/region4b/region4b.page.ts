import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-region4b',
  templateUrl: './region4b.page.html',
  styleUrls: ['./region4b.page.scss'],
})
export class Region4bPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  puertogalera() {
    this.router.navigate(['puertogalera']);
  }

  elnido() {
    this.router.navigate(['elnido']);
  }

  puertoprincesa() {
    this.router.navigate(['puertoprincesa']);
  }

}
