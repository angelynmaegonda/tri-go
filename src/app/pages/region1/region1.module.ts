import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Region1PageRoutingModule } from './region1-routing.module';

import { Region1Page } from './region1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Region1PageRoutingModule
  ],
  declarations: [Region1Page]
})
export class Region1PageModule {}
