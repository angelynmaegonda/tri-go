import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuertogaleraPage } from './puertogalera.page';

const routes: Routes = [
  {
    path: '',
    component: PuertogaleraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuertogaleraPageRoutingModule {}
