import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MalacanangPageRoutingModule } from './malacanang-routing.module';

import { MalacanangPage } from './malacanang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MalacanangPageRoutingModule
  ],
  declarations: [MalacanangPage]
})
export class MalacanangPageModule {}
