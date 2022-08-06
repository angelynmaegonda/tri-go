import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CagsawaPage } from './cagsawa.page';

const routes: Routes = [
  {
    path: '',
    component: CagsawaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CagsawaPageRoutingModule {}
