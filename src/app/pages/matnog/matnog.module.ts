import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatnogPageRoutingModule } from './matnog-routing.module';

import { MatnogPage } from './matnog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatnogPageRoutingModule
  ],
  declarations: [MatnogPage]
})
export class MatnogPageModule {}
