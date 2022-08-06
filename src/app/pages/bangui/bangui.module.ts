import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BanguiPageRoutingModule } from './bangui-routing.module';

import { BanguiPage } from './bangui.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BanguiPageRoutingModule
  ],
  declarations: [BanguiPage]
})
export class BanguiPageModule {}
