import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GallerysectionRoutingModule } from './gallerysection-routing.module';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    GallerysectionRoutingModule
  ]
})
export class GallerysectionModule { }
