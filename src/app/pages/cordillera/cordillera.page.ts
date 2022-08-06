import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cordillera',
  templateUrl: './cordillera.page.html',
  styleUrls: ['./cordillera.page.scss'],
})
export class CordilleraPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  sagada() {
    this.router.navigate(['sagada']);
  }

  banaue() {
    this.router.navigate(['banaue']);
  }

  stobosa() {
    this.router.navigate(['stobosa']);
  }

}
