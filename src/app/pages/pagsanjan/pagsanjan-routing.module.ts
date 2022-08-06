import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagsanjanPage } from './pagsanjan.page';

const routes: Routes = [
  {
    path: '',
    component: PagsanjanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagsanjanPageRoutingModule {}
