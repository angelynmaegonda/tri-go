import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HundredislandsPage } from './hundredislands.page';

const routes: Routes = [
  {
    path: '',
    component: HundredislandsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HundredislandsPageRoutingModule {}
