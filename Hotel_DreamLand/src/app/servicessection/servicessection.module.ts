import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicessectionRoutingModule } from './servicessection-routing.module';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ServicessectionRoutingModule
  ]
})
export class ServicessectionModule { }
