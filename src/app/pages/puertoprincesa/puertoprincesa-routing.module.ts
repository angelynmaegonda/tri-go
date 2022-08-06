import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuertoprincesaPage } from './puertoprincesa.page';

const routes: Routes = [
  {
    path: '',
    component: PuertoprincesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuertoprincesaPageRoutingModule {}
