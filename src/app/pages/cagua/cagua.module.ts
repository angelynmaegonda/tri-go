import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaguaPageRoutingModule } from './cagua-routing.module';

import { CaguaPage } from './cagua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaguaPageRoutingModule
  ],
  declarations: [CaguaPage]
})
export class CaguaPageModule {}
