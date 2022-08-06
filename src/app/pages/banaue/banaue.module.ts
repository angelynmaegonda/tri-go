import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BanauePageRoutingModule } from './banaue-routing.module';

import { BanauePage } from './banaue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BanauePageRoutingModule
  ],
  declarations: [BanauePage]
})
export class BanauePageModule {}
