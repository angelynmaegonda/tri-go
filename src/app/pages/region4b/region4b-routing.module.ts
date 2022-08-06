import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Region4bPage } from './region4b.page';

const routes: Routes = [
  {
    path: '',
    component: Region4bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Region4bPageRoutingModule {}
