import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SagadaPageRoutingModule } from './sagada-routing.module';

import { SagadaPage } from './sagada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SagadaPageRoutingModule
  ],
  declarations: [SagadaPage]
})
export class SagadaPageModule {}
