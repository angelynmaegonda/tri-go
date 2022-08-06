import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Region1Page } from './region1.page';

const routes: Routes = [
  {
    path: '',
    component: Region1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Region1PageRoutingModule {}
