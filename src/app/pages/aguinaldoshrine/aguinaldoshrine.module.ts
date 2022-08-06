import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AguinaldoshrinePageRoutingModule } from './aguinaldoshrine-routing.module';

import { AguinaldoshrinePage } from './aguinaldoshrine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AguinaldoshrinePageRoutingModule
  ],
  declarations: [AguinaldoshrinePage]
})
export class AguinaldoshrinePageModule {}
