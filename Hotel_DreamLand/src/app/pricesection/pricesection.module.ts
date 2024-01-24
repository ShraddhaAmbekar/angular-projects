import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricesectionRoutingModule } from './pricesection-routing.module';
import { PriceComponent } from './price/price.component';


@NgModule({
  declarations: [
    PriceComponent
  ],
  imports: [
    CommonModule,
    PricesectionRoutingModule
  ]
})
export class PricesectionModule { }
