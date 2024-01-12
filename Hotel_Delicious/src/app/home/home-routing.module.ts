import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainPageComponent } from './home-main-page/home-main-page.component';

const routes: Routes = [
  {path : "home-page", component: HomeMainPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
