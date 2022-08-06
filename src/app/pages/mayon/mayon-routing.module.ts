import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MayonPage } from './mayon.page';

const routes: Routes = [
  {
    path: '',
    component: MayonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MayonPageRoutingModule {}
