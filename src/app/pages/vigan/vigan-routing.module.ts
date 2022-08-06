import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViganPage } from './vigan.page';

const routes: Routes = [
  {
    path: '',
    component: ViganPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViganPageRoutingModule {}
