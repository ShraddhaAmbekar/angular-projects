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
  {path : 'team', loadChildren:()=>import("./teamsection/teamsection.module").then(mod=>mod.TeamsectionModule)},
  {path: 'gallery', loadChildren:()=>import("./gallerysection/gallerysection.module").then(mod=>mod.GallerysectionModule)},
  {path: 'price', loadChildren:()=>import("./pricesection/pricesection.module").then(mod=>mod.PricesectionModule)},
  {path: 'blog', loadChildren:()=>import("./blogsection/blogsection.module").then(mod=>mod.BlogsectionModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
