import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StobosaPageRoutingModule } from './stobosa-routing.module';

import { StobosaPage } from './stobosa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StobosaPageRoutingModule
  ],
  declarations: [StobosaPage]
})
export class StobosaPageModule {}
