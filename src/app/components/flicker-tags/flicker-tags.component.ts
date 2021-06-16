import { Component, Input, OnInit } from '@angular/core';
import { FlickerPhotoPayload } from 'src/app/services/flicker-api-service.interface';

@Component({
  selector: 'app-flicker-tags',
  templateUrl: './flicker-tags.component.html',
  styleUrls: ['./flicker-tags.component.scss']
})
export class FlickerTagsComponent implements OnInit {

  @Input()
  public flickerData!: FlickerPhotoPayload[]

  @Input()
  public tag?: any

  @Input()
  public galleryMode: boolean = false

  public get backgroundImage(){
    return this.flickerData[0].url_o
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.flickerData)
  }

}
