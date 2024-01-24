import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsectionRoutingModule } from './teamsection-routing.module';
import { TeamComponent } from './team/team.component';


@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [
    CommonModule,
    TeamsectionRoutingModule
  ]
})
export class TeamsectionModule { }
