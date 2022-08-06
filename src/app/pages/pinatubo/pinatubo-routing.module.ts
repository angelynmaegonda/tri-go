import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinatuboPage } from './pinatubo.page';

const routes: Routes = [
  {
    path: '',
    component: PinatuboPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinatuboPageRoutingModule {}
