import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Taal2Page } from './taal2.page';

const routes: Routes = [
  {
    path: '',
    component: Taal2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Taal2PageRoutingModule {}
