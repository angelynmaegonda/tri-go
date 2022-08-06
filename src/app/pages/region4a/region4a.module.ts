import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Region4aPageRoutingModule } from './region4a-routing.module';

import { Region4aPage } from './region4a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Region4aPageRoutingModule
  ],
  declarations: [Region4aPage]
})
export class Region4aPageModule {}
