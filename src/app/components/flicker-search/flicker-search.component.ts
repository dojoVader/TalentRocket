import { FlickerSearchConfiguration } from './../../services/flicker-api-service.interface';
import { FlickerSearchService, SortTypeInteface } from './flicker-search-service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlickerApiServiceService } from 'src/app/services/flicker-api-service.service';


@Component({
  selector: 'app-flicker-search',
  templateUrl: './flicker-search.component.html',
  styleUrls: ['./flicker-search.component.scss']
})
export class FlickerSearchComponent implements OnInit {

  public searchTag: string = 'Please Enter a Search tag'
  public searchForm: FormGroup;
  public currentSortType!: string;


  constructor(
    private flickerApiService: FlickerApiServiceService,
    private flickerSearchEvent: FlickerSearchService) {
      this.searchForm = new FormGroup({
        searchText: new FormControl(null,[Validators.required])
      })
  }

  doSearch(){
    if(this.searchForm.valid){
      // Check that the form is valid
      const searchText = this.searchForm.value.searchText;

      const flickerConfiguration: FlickerSearchConfiguration = {
        tags: searchText,
        extras: ['date_upload','date_taken', 'owner_name', 'views', 'url_sq', 'url_o'],
        perPage: 1,
        sort: 'interestingness-asc',
        format: 'json'
      }
      this.flickerApiService.get(flickerConfiguration)
      .subscribe(item => {
         this.flickerSearchEvent.raiseSearchEvent({...item,searchText})
         this.doReset()
      });

    }
  }

  doReset(){
    this.searchForm.controls['searchText'].reset(null)
  }

  ngOnInit(): void {
  }

  sort(sort: SortTypeInteface){
    this.currentSortType = sort.type
    this.flickerSearchEvent.raiseSortEvent(sort);
  }




}
