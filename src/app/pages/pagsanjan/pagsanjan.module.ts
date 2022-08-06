import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagsanjanPageRoutingModule } from './pagsanjan-routing.module';

import { PagsanjanPage } from './pagsanjan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagsanjanPageRoutingModule
  ],
  declarations: [PagsanjanPage]
})
export class PagsanjanPageModule {}
