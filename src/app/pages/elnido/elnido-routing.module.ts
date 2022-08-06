import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElnidoPage } from './elnido.page';

const routes: Routes = [
  {
    path: '',
    component: ElnidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElnidoPageRoutingModule {}
