import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoThumbnailComponent implements OnInit {
  sanitizedImageText!: SafeResourceUrl;

  @Input() set image(value: string) {
    // the text needs to be sanitie since it is used as a source string in the template
    this.sanitizedImageText = this._sanitizer.bypassSecurityTrustResourceUrl(value);
  }

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit(): void {}
}
