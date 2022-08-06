import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SagadaPage } from './sagada.page';

const routes: Routes = [
  {
    path: '',
    component: SagadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SagadaPageRoutingModule {}
