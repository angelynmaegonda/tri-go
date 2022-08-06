import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NcrPage } from './ncr.page';

const routes: Routes = [
  {
    path: '',
    component: NcrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NcrPageRoutingModule {}
