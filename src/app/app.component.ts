import { ChangeDetectionStrategy, Component, VERSION } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { take, tap } from "rxjs/operators";
import { VideoAPIService } from "./video/video-api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  loadingThumbnail$ = new Subject<string>();
  image!: string;

  constructor(private _videoApiService: VideoAPIService) {}

  videoUrlChanged(url: string) {
    // show a loader while we get the thumbnail
    this.loadingThumbnail$.next('loading');

    this._videoApiService
      .getVideoThumbnail(url)
      .pipe(
        take(1),
        tap(() => {
          this.loadingThumbnail$.next('loaded');
        })
      )
      .subscribe({ next: (base64Image) => (this.image = base64Image) });
  }
}
