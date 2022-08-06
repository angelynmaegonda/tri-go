import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CagsawaPageRoutingModule } from './cagsawa-routing.module';

import { CagsawaPage } from './cagsawa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CagsawaPageRoutingModule
  ],
  declarations: [CagsawaPage]
})
export class CagsawaPageModule {}
