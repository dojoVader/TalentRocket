import { SortTypeInteface } from './../../components/flicker-search/flicker-search-service';
import { Component, OnInit } from '@angular/core';
import { FlickerSearchService } from 'src/app/components/flicker-search/flicker-search-service';
import { FlickerSearchResults } from 'src/app/services/flicker-api-service.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'flicker-project';

  results: FlickerSearchResults[]  = []

  errorMessage = '';

  constructor(private flickerSearchEvt: FlickerSearchService){

  }

  ngOnInit(): void {
    // SUbscribe to Subject and listen
    this.flickerSearchEvt.$$flickerSubject.subscribe( item => {
      if(item.photos.total === 0){
        alert("Failed to get any result for this tag")
      }else{
        this.results.push(item);
      }

    })

    this.flickerSearchEvt.$sortSubject.subscribe( item => this.sort(item))
  }

  sort(sort: SortTypeInteface){
    switch(sort.type){
      case 'views':
        this.results.sort((a,b) => {
          const viewsA = a.photos.photo[0].views;
          const viewsB = b.photos.photo[0].views;
            return parseInt(viewsA) > parseInt(viewsB) ? -1 : 1
        })
      break;
      case 'datesubmitted':
        this.results.sort((a,b) => {
          const viewsA = a.photos.photo[0].dateupload;
          const viewsB = b.photos.photo[0].dateupload;
            return parseInt(viewsA) > parseInt(viewsB) ? -1 : 1
        });
      break;

      case 'datetaken':
        this.results.sort((a,b) => {
          const dateA = new Date(a.photos.photo[0].datetaken).getTime()
          const dateB = new Date(b.photos.photo[0].datetaken).getTime()
            return dateA > dateB ? -1 : 1
        })


    }
  }
}
