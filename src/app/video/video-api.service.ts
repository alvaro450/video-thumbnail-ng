import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VIDEO_API_DOMAIN } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VideoAPIService {
  constructor(private _httpClient: HttpClient) {}

  getVideoThumbnail(videoUrl: string): Observable<string> {
    const url = `${VIDEO_API_DOMAIN}/video?url=${encodeURIComponent(videoUrl)}`;
    return this._httpClient
      .get<{ imageText: string }>(url)
      .pipe(map(({ imageText }) => imageText));
  }
}
