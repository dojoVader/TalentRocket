import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FlickerSearchConfiguration, FlickerSearchResults } from './flicker-api-service.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlickerApiServiceService {


  constructor(
    private http: HttpClient,
    private httpParams: HttpParams) {

  }

  get(config: FlickerSearchConfiguration): Observable<FlickerSearchResults> {
    this.httpParams = new HttpParams()
      .set('method', 'flickr.photos.search')
      .set('api_key', environment.flickerApiKey)
      .set('tags', config.tags)
      .set('sort', config.sort)
      .set('per_page', config.perPage)
      .set('extras', config.extras.length ? config.extras.join(',') : '')
      .set('format', config.format)
      .set('nojsoncallback', 1);

    return this.http.get(`${environment.flickerHost}`, {
      params: this.httpParams
    }) as Observable<FlickerSearchResults>

  }

  getPhotosByUserId(userId: string): Observable<FlickerSearchResults> {
    this.httpParams = new HttpParams()
      .set('method', 'flickr.photos.search')
      .set('format', 'json')
      .set('api_key', environment.flickerApiKey)
      .set('user_id', userId)
      .set('nojsoncallback', 1)
      .set('extras','url_o,url_sq,url_q')

    return this.http.get(`${environment.flickerHost}`, {
      params: this.httpParams
    }) as Observable<FlickerSearchResults>

  }


}
