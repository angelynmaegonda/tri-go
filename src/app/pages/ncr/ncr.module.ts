import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NcrPageRoutingModule } from './ncr-routing.module';

import { NcrPage } from './ncr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NcrPageRoutingModule
  ],
  declarations: [NcrPage]
})
export class NcrPageModule {}
