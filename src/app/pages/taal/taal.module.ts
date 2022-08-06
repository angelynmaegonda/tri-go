import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaalPageRoutingModule } from './taal-routing.module';

import { TaalPage } from './taal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaalPageRoutingModule
  ],
  declarations: [TaalPage]
})
export class TaalPageModule {}
