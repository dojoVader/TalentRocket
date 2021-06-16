import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { FlickerPhotoPayload, FlickerSearchResults } from 'src/app/services/flicker-api-service.interface';
import { FlickerApiServiceService } from 'src/app/services/flicker-api-service.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public userId!: string | any;
  result!: FlickerPhotoPayload[];

  constructor(
    private route: ActivatedRoute,
    private flickerAPISearch: FlickerApiServiceService) {

    this.route.params.subscribe( item => {
      console.log(item.id)
      this.flickerAPISearch.getPhotosByUserId(item.id).subscribe(
        item => {
          this.result = item.photos.photo;
          console.log(item);
        }
      )
    })

  }

  ngOnInit(): void {

  }

}
