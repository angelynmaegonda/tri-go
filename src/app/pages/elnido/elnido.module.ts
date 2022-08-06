import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElnidoPageRoutingModule } from './elnido-routing.module';

import { ElnidoPage } from './elnido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElnidoPageRoutingModule
  ],
  declarations: [ElnidoPage]
})
export class ElnidoPageModule {}
