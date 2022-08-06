import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntramurosPageRoutingModule } from './intramuros-routing.module';

import { IntramurosPage } from './intramuros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntramurosPageRoutingModule
  ],
  declarations: [IntramurosPage]
})
export class IntramurosPageModule {}
