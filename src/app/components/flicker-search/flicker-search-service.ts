import { FlickerSearchResults } from './../../services/flicker-api-service.interface';
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export interface SortTypeInteface{
  type: 'views' | 'datetaken' | 'datesubmitted'
}
@Injectable({
  providedIn: 'root'
})
export class FlickerSearchService {

  private flickerSubject = new Subject<FlickerSearchResults>();
  public $$flickerSubject = this.flickerSubject.asObservable()

  private sortSubject = new Subject<SortTypeInteface>();
  public $sortSubject = this.sortSubject.asObservable();

  constructor(){

  }

  raiseSearchEvent(topic: FlickerSearchResults){
     this.flickerSubject.next(topic);
  }

  close(){
    this.flickerSubject.unsubscribe()
  }

  raiseSortEvent(sort: SortTypeInteface){
    this.sortSubject.next(sort);
  }

}
