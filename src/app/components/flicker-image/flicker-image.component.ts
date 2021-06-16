import { FlickerPhotoPayload } from 'src/app/services/flicker-api-service.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flicker-image',
  templateUrl: './flicker-image.component.html',
  styleUrls: ['./flicker-image.component.scss']
})
export class FlickerImageComponent implements OnInit {

  @Input()
  public flickerData!: FlickerPhotoPayload

  public get backgroundImage(){
    return this.flickerData.url_q
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.flickerData)
  }

}


