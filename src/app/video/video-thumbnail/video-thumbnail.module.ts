import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoThumbnailComponent } from './video-thumbnail.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [VideoThumbnailComponent],
  exports: [VideoThumbnailComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class VideoThumbnailModule { }
