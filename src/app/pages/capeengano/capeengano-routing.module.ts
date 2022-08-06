import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapeenganoPage } from './capeengano.page';

const routes: Routes = [
  {
    path: '',
    component: CapeenganoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapeenganoPageRoutingModule {}
