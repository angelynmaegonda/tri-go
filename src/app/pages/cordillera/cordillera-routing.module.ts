import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CordilleraPage } from './cordillera.page';

const routes: Routes = [
  {
    path: '',
    component: CordilleraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CordilleraPageRoutingModule {}
