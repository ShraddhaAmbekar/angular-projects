import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomssectionRoutingModule } from './roomssection-routing.module';
import { RoomsComponent } from './rooms/rooms.component';


@NgModule({
  declarations: [
    RoomsComponent
  ],
  imports: [
    CommonModule,
    RoomssectionRoutingModule
  ]
})
export class RoomssectionModule { }
