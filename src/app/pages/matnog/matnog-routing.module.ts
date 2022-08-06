import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatnogPage } from './matnog.page';

const routes: Routes = [
  {
    path: '',
    component: MatnogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatnogPageRoutingModule {}
