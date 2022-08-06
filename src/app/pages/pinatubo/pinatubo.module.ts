import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinatuboPageRoutingModule } from './pinatubo-routing.module';

import { PinatuboPage } from './pinatubo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinatuboPageRoutingModule
  ],
  declarations: [PinatuboPage]
})
export class PinatuboPageModule {}
