import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubicPageRoutingModule } from './subic-routing.module';

import { SubicPage } from './subic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubicPageRoutingModule
  ],
  declarations: [SubicPage]
})
export class SubicPageModule {}
