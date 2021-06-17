import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['./video-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoFormComponent implements OnInit {
  videoFormGroup!: FormGroup;
  urlControl!: FormControl;

  @Output() onVideoUrlSubmit = new EventEmitter<string>();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.urlControl = new FormControl('', Validators.required);

    this.videoFormGroup = this._formBuilder.group({
      url: this.urlControl
    });
  }

  onSubmit() {
    this.onVideoUrlSubmit.next(this.urlControl.value);
  }
}
