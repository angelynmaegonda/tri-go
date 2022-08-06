import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Region4bPageRoutingModule } from './region4b-routing.module';

import { Region4bPage } from './region4b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Region4bPageRoutingModule
  ],
  declarations: [Region4bPage]
})
export class Region4bPageModule {}
