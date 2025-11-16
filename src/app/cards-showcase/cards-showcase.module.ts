import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardsShowcasePageRoutingModule } from './cards-showcase-routing.module';

import { CardsShowcasePage } from './cards-showcase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardsShowcasePageRoutingModule,
    CardsShowcasePage
  ]
})
export class CardsShowcasePageModule {}
