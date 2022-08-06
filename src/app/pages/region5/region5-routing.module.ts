import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Region5Page } from './region5.page';

const routes: Routes = [
  {
    path: '',
    component: Region5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Region5PageRoutingModule {}
