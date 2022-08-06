import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BatanesPageRoutingModule } from './batanes-routing.module';

import { BatanesPage } from './batanes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BatanesPageRoutingModule
  ],
  declarations: [BatanesPage]
})
export class BatanesPageModule {}
