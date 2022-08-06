import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuertogaleraPageRoutingModule } from './puertogalera-routing.module';

import { PuertogaleraPage } from './puertogalera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuertogaleraPageRoutingModule
  ],
  declarations: [PuertogaleraPage]
})
export class PuertogaleraPageModule {}
