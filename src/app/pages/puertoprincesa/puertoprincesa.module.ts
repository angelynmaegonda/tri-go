import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuertoprincesaPageRoutingModule } from './puertoprincesa-routing.module';

import { PuertoprincesaPage } from './puertoprincesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuertoprincesaPageRoutingModule
  ],
  declarations: [PuertoprincesaPage]
})
export class PuertoprincesaPageModule {}
