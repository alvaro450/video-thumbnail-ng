import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VideoFormModule } from "./video-form/video-form.module";
import { VideoInformationModule } from "./video-information/video-information.module";
import { VideoThumbnailModule } from "./video-thumbnail/video-thumbnail.module";

@NgModule({
  imports: [
    CommonModule,
    VideoFormModule,
    VideoInformationModule,
    VideoThumbnailModule,
  ],
  exports: [VideoFormModule, VideoInformationModule, VideoThumbnailModule],
  declarations: [],
})
export class VideoModule {}
