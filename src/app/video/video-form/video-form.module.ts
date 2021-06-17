import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoFormComponent } from './video-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  declarations: [VideoFormComponent],
  exports: [VideoFormComponent]
})
export class VideoFormModule {}
