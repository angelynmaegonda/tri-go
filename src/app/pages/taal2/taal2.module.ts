import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Taal2PageRoutingModule } from './taal2-routing.module';

import { Taal2Page } from './taal2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Taal2PageRoutingModule
  ],
  declarations: [Taal2Page]
})
export class Taal2PageModule {}
