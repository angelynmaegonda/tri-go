import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subic2PageRoutingModule } from './subic2-routing.module';

import { Subic2Page } from './subic2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subic2PageRoutingModule
  ],
  declarations: [Subic2Page]
})
export class Subic2PageModule {}
