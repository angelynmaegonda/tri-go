import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaalPage } from './taal.page';

const routes: Routes = [
  {
    path: '',
    component: TaalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaalPageRoutingModule {}
