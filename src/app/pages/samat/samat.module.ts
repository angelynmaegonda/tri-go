import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamatPageRoutingModule } from './samat-routing.module';

import { SamatPage } from './samat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamatPageRoutingModule
  ],
  declarations: [SamatPage]
})
export class SamatPageModule {}
