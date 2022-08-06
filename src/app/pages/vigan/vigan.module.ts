import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViganPageRoutingModule } from './vigan-routing.module';

import { ViganPage } from './vigan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViganPageRoutingModule
  ],
  declarations: [ViganPage]
})
export class ViganPageModule {}
