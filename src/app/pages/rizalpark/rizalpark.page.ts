import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rizalpark',
  templateUrl: './rizalpark.page.html',
  styleUrls: ['./rizalpark.page.scss'],
})
export class RizalparkPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  rizalpark2() {
    this.router.navigate(['rizalpark2']);
  }

}
