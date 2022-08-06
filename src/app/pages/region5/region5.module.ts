import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Region5PageRoutingModule } from './region5-routing.module';

import { Region5Page } from './region5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Region5PageRoutingModule
  ],
  declarations: [Region5Page]
})
export class Region5PageModule {}
