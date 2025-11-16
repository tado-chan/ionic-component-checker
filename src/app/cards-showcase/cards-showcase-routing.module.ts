import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsShowcasePage } from './cards-showcase.page';

const routes: Routes = [
  {
    path: '',
    component: CardsShowcasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsShowcasePageRoutingModule {}
