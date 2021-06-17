import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-information',
  templateUrl: './video-information.component.html',
  styleUrls: ['./video-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoInformationComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  @ViewChild('videoThumbnail') videoThumbnail!: ElementRef;

  @Input() url!: string;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
      if(!changes.url.isFirstChange()) {
        this.videoPlayer.nativeElement.setAttribute('src', this.url);
      }
  }

  ngAfterViewInit() {
    // when the video is loaded we can then capture a frame to be shown in a canvas
    this.videoPlayer.nativeElement.addEventListener(
      'loadeddata',
      this._placeThumbnailInCanvas
    );

    // re-capture a frame when the video's progress has changed
    // this.videoPlayer.nativeElement.addEventListener(
    //   'timeupdate',
    //   this._placeThumbnailInCanvas
    // );
  }

  ngOnDestroy() {
    this.videoPlayer.nativeElement.removeEventListener(
      'loadeddata',
      this._placeThumbnailInCanvas
    );

    // this.videoPlayer.nativeElement.removeEventListener(
    //   'timeupdate',
    //   this._placeThumbnailInCanvas
    // );
  }

  private _placeThumbnailInCanvas = () => {
    const timeOutId = setTimeout(() => {
      try {
        const canvasContext = this.videoThumbnail.nativeElement.getContext(
          '2d'
        );
        // Placing the current frame image of the video in the canvas
        canvasContext.drawImage(
          this.videoPlayer.nativeElement,
          0,
          0,
          this.videoPlayer.nativeElement.videoWidth,
          this.videoPlayer.nativeElement.videoHeight
        );
      } catch (e) {}
      // clear the timeout
      clearTimeout(timeOutId);
    }, 100);
  }
}
