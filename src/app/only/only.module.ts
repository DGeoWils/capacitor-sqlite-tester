import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlyPageRoutingModule } from './only-routing.module';

import { OnlyPage } from './only.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnlyPageRoutingModule
  ],
  declarations: []
})
export class OnlyPageModule {}
