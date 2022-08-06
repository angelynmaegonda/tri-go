import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subic',
  templateUrl: './subic.page.html',
  styleUrls: ['./subic.page.scss'],
})
export class SubicPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  subic2() {
    this.router.navigate(['subic2']);
  }

}
