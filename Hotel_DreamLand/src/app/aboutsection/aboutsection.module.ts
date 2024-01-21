import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutsectionRoutingModule } from './aboutsection-routing.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutsectionRoutingModule
  ]
})
export class AboutsectionModule { }
