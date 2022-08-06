import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaguaPage } from './cagua.page';

const routes: Routes = [
  {
    path: '',
    component: CaguaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaguaPageRoutingModule {}
