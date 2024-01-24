import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingModuleRoutingModule } from './booking-module-routing.module';
import { BookingAreaComponent } from './booking-area/booking-area.component';
import { BookNowComponent } from './book-now/book-now.component';


@NgModule({
  declarations: [
    BookingAreaComponent,
    BookNowComponent
  ],
  imports: [
    CommonModule,
    BookingModuleRoutingModule
  ]
})
export class BookingModuleModule { }
