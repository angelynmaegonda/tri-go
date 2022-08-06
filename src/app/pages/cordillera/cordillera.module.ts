import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CordilleraPageRoutingModule } from './cordillera-routing.module';

import { CordilleraPage } from './cordillera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CordilleraPageRoutingModule
  ],
  declarations: [CordilleraPage]
})
export class CordilleraPageModule {}
