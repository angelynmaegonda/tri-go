import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HundredislandsPageRoutingModule } from './hundredislands-routing.module';

import { HundredislandsPage } from './hundredislands.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HundredislandsPageRoutingModule
  ],
  declarations: [HundredislandsPage]
})
export class HundredislandsPageModule {}
