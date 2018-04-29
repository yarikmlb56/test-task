import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { FilmsService } from '../services/films.service';
import { WindowService } from '../services/window.service';
import { LocalStorageService } from '../services/local-storage.service';


@Component({
  selector: 'app-top-movies-component',
  templateUrl: './top-20-movies.component.html',
  styleUrls: ['./top-20-movies.component.scss']
})
export class Top20MoviesComponent implements OnInit, OnDestroy {

  public movies: IMovie[];
  public isLoading: boolean;
  public readonly _DIRECTOR_URL: string = 'https://www.imdb.com/name/:directorId';

  private _destroy$$: Subject<void> = new Subject<void>();

  public constructor(
    private _filmsService: FilmsService,
    private _windowService: WindowService,
    private _localStorageService: LocalStorageService,
  ) {}

  public ngOnInit(): void {
    this.isLoading = true;

    this._filmsService.getFilms$()
      .map((response: IMyApiResponse) => {
        return response.data.movies;
      })
      .concatAll()
      .mergeMap((movie: IMovie) => {
        return this.getTrailers(movie);
      })
      .takeUntil(this._destroy$$)
      .subscribe((response: IMyApiResponse) => {
        debugger;
        this.movies = response.data.movies;
        this.isLoading = false;
      });
  }

  public ngOnDestroy(): void {
    this._destroy$$.next();
    this._destroy$$.complete();
  }

  public openTrailerModal(movie: IMovie): void {
    this._filmsService.getTrailers$(movie.title.replace(/ /g, '-').toLocaleLowerCase())
      .takeUntil(this._destroy$$)
      .subscribe((response: IMyApiResponse) => {
        debugger;
      })
  }

  public getTrailers(movie: IMovie): any {
    return this._filmsService.getTrailers$(movie.title.replace(/ /g, '-').toLocaleLowerCase())
      .;
  }

  public navigateToDirector(directorId: number): void {
    const link: string = this._DIRECTOR_URL
      .replace(':directorId', String(directorId));

    this._windowService.openNewTab(link);
  }

  public addToFavorite(movie: IMovie): void {
    this._localStorageService.setToStorage(movie);
  }

  public isFavorite(movieId: string): boolean {
    return this._localStorageService.isExist(movieId);
  }

  public removeFromFavorite(movieId: string): void {
    this._localStorageService.removeFromStorage(movieId);
  }
}
