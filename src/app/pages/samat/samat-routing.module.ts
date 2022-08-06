import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamatPage } from './samat.page';

const routes: Routes = [
  {
    path: '',
    component: SamatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamatPageRoutingModule {}
