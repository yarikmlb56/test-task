import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class MovieService {

  public _movies$: Observable<IMovie[]>;

  private readonly _URL: string = 'http://www.myapifilms.com/imdb/top?start=1&end=20&token=dd2d4b1b-b9a7-40e6-bb36-f9680f00f93f&' +
    'format=json&data=1&callback=JSONP_CALLBACK';
  private readonly _TRAILERS_URL: string = 'http://www.myapifilms.com/trailerAddict/taapi?token=dd2d4b1b-b9a7-40e6-bb36-f9680f00f93f&' +
    'count=8&credit=&format=json&callback=JSONP_CALLBACK&film=';

  public constructor(
    private _http: HttpClient,
  ) {
    this._movies$ = this._http.jsonp(this._URL, 'JSONP_CALLBACK')
      .map((response: IMyApiResponse) => {
        return response.data.movies;
      })
      .shareReplay(1);
  }

  public getFilms$(): Observable<IMovie[]> {
    return this._movies$;
  }

  public getTrailers$(movieTitle: string): Observable<ITrailer[]> {
    return this._http.jsonp(this._TRAILERS_URL + movieTitle, 'JSONP_CALLBACK')
      .switchMap((response: IMyApiResponse) => {
        if (response.data) {

          return Observable.of(response.data.trailer);
        } else {

          return Observable.throw(response.error);
        }
      });
  }
}


