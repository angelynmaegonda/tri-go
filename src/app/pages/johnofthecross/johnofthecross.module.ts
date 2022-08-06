import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JohnofthecrossPageRoutingModule } from './johnofthecross-routing.module';

import { JohnofthecrossPage } from './johnofthecross.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JohnofthecrossPageRoutingModule
  ],
  declarations: [JohnofthecrossPage]
})
export class JohnofthecrossPageModule {}
