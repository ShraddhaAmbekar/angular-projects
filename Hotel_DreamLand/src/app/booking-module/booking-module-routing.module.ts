import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingAreaComponent } from './booking-area/booking-area.component';

const routes: Routes = [
  {path: 'book-now', component: BookingAreaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingModuleRoutingModule { }
