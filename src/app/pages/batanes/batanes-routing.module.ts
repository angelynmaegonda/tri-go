import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatanesPage } from './batanes.page';

const routes: Routes = [
  {
    path: '',
    component: BatanesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatanesPageRoutingModule {}
