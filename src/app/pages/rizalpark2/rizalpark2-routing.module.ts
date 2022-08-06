import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rizalpark2Page } from './rizalpark2.page';

const routes: Routes = [
  {
    path: '',
    component: Rizalpark2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rizalpark2PageRoutingModule {}
