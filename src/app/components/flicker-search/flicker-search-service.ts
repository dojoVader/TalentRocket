import { FlickerSearchResults } from './../../services/flicker-api-service.interface';
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FlickerSearchService {

  private flickerSubject = new Subject<FlickerSearchResults>();
  public $$flickerSubject = this.flickerSubject.asObservable()

  constructor(){

  }

  raiseSearchEvent(topic: FlickerSearchResults){
     this.flickerSubject.next(topic);
  }

  close(){
    this.flickerSubject.unsubscribe()
  }

}
