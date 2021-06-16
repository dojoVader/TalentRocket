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

  constructor(private flickerSerchEvt: FlickerSearchService){

  }

  ngOnInit(): void {
    this.flickerSerchEvt.$$flickerSubject.subscribe( item => {
      this.results.push(item);
    })
  }
}
