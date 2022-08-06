import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rizalpark2PageRoutingModule } from './rizalpark2-routing.module';

import { Rizalpark2Page } from './rizalpark2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rizalpark2PageRoutingModule
  ],
  declarations: [Rizalpark2Page]
})
export class Rizalpark2PageModule {}
