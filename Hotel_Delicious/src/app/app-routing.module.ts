import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path : '', component : MainPageComponent},
  {path : 'Main', component : MainPageComponent},
  {path : 'home', loadChildren:()=> import("./home/home.module").then(mod=>mod.HomeModule)},
  {path : 'booking-area', loadChildren:()=>import("./booking-module/booking-module.module").then(mod=>mod.BookingModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
