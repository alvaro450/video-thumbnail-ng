import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoInformationComponent } from './video-information.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [VideoInformationComponent],
  exports: [VideoInformationComponent]
})
export class VideoInformationModule {}
