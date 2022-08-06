import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MayonPageRoutingModule } from './mayon-routing.module';

import { MayonPage } from './mayon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MayonPageRoutingModule
  ],
  declarations: [MayonPage]
})
export class MayonPageModule {}
