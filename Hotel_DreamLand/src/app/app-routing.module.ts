import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path : '', component : MainPageComponent},
  {path : 'main', component : MainPageComponent},
  {path : 'signin', component : SigninComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'home', loadChildren:()=> import("./home/home.module").then(mod=>mod.HomeModule)},
  {path : 'booking-area', loadChildren:()=>import("./booking-module/booking-module.module").then(mod=>mod.BookingModuleModule)},
  {path : 'rooms', loadChildren:()=>import("./roomssection/roomssection.module").then(mod=>mod.RoomssectionModule)},
  {path : 'about', loadChildren:()=>import("./aboutsection/aboutsection.module").then(mod=>mod.AboutsectionModule)},
  {path : 'services', loadChildren:()=>import("./servicessection/servicessection.module").then(mod=>mod.ServicessectionModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
