import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AguinaldoshrinePage } from './aguinaldoshrine.page';

const routes: Routes = [
  {
    path: '',
    component: AguinaldoshrinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AguinaldoshrinePageRoutingModule {}
