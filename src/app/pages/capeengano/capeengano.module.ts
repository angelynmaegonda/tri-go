import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapeenganoPageRoutingModule } from './capeengano-routing.module';

import { CapeenganoPage } from './capeengano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapeenganoPageRoutingModule
  ],
  declarations: [CapeenganoPage]
})
export class CapeenganoPageModule {}
