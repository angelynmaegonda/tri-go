import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubicPage } from './subic.page';

const routes: Routes = [
  {
    path: '',
    component: SubicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubicPageRoutingModule {}
