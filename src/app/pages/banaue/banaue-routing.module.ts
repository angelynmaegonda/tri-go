import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BanauePage } from './banaue.page';

const routes: Routes = [
  {
    path: '',
    component: BanauePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BanauePageRoutingModule {}
