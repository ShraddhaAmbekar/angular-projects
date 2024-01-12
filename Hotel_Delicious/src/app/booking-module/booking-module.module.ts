import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingModuleRoutingModule } from './booking-module-routing.module';
import { BookingAreaComponent } from './booking-area/booking-area.component';


@NgModule({
  declarations: [
    BookingAreaComponent
  ],
  imports: [
    CommonModule,
    BookingModuleRoutingModule
  ]
})
export class BookingModuleModule { }
