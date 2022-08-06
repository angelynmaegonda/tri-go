import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BanguiPage } from './bangui.page';

const routes: Routes = [
  {
    path: '',
    component: BanguiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BanguiPageRoutingModule {}
