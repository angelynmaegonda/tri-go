import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MalacanangPage } from './malacanang.page';

const routes: Routes = [
  {
    path: '',
    component: MalacanangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MalacanangPageRoutingModule {}
