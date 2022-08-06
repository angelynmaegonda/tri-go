import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RizalparkPageRoutingModule } from './rizalpark-routing.module';

import { RizalparkPage } from './rizalpark.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RizalparkPageRoutingModule
  ],
  declarations: [RizalparkPage]
})
export class RizalparkPageModule {}
