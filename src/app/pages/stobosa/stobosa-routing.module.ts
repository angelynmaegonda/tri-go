import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StobosaPage } from './stobosa.page';

const routes: Routes = [
  {
    path: '',
    component: StobosaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StobosaPageRoutingModule {}
