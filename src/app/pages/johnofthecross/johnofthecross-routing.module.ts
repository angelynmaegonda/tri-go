import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JohnofthecrossPage } from './johnofthecross.page';

const routes: Routes = [
  {
    path: '',
    component: JohnofthecrossPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JohnofthecrossPageRoutingModule {}
