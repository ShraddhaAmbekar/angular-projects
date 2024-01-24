import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingAreaComponent } from './booking-area/booking-area.component';
import { BookNowComponent } from './book-now/book-now.component';

const routes: Routes = [
  {path: 'check-available', component: BookingAreaComponent},
  {path: 'book-now', component: BookNowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingModuleRoutingModule { }
