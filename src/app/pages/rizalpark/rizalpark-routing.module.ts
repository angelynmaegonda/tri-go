import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RizalparkPage } from './rizalpark.page';

const routes: Routes = [
  {
    path: '',
    component: RizalparkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RizalparkPageRoutingModule {}
