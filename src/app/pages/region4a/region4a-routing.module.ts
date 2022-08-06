import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Region4aPage } from './region4a.page';

const routes: Routes = [
  {
    path: '',
    component: Region4aPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Region4aPageRoutingModule {}
