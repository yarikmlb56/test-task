import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilmsService {

  private readonly _URL: string = 'http://www.myapifilms.com/imdb/top?start=1&end=20&token=dd2d4b1b-b9a7-40e6-bb36-f9680f00f93f&format=json&data=1';
  private readonly _TRAILERS_URL: string = 'http://www.myapifilms.com/trailerAddict/taapi?token=dd2d4b1b-b9a7-40e6-bb36-f9680f00f93f&count=8&credit=&format=json&film=';

  public constructor(
    private _http: HttpClient,
  ) { }

  public getFilms$(): Observable<IMyApiResponse> {
    return this._http.get<IMyApiResponse>(this._URL);
  }

  public getTrailers$(movieTitle: string): Observable<IMyApiResponse> {
    return this._http.get<IMyApiResponse>(this._TRAILERS_URL + movieTitle);
  }
}


