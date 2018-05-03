import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Subject } from 'rxjs/Subject';

import { MovieService } from '../../shared/services/movie.service';
import { WindowService } from '../../shared/services/window.service';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { MovieModalComponent } from '../../shared/components/movie-modal/movie-modal.component';


@Component({
  selector: 'app-top-movies-component',
  templateUrl: './top-20-movies.component.html',
})
export class Top20MoviesComponent implements OnInit, OnDestroy {

  public movies: IMovie[];
  public isLoading: boolean;

  private _destroy$$: Subject<void> = new Subject<void>();

  public constructor(
    private _filmsService: MovieService,
    private _windowService: WindowService,
    private _localStorageService: LocalStorageService,
    private _dialog: MatDialog,
  ) {}

  public ngOnInit(): void {
    this.isLoading = true;

    this._filmsService.getFilms$()
      .takeUntil(this._destroy$$)
      .subscribe((movies: IMovie[]) => {
        this.movies = movies;
        this.isLoading = false;
      });
  }

  public ngOnDestroy(): void {
    this._destroy$$.next();
    this._destroy$$.complete();
  }

  public openTrailerModal(movie: IMovie): void {
    this._dialog.open(MovieModalComponent, {
      width: '600px',
      height: '500px',
      data: { movie }
    });
  }

  public addToFavorite(movie: IMovie): void {
    this._localStorageService.setToStorage(movie);
  }

  public removeFromFavorite(movieId: string): void {
    this._localStorageService.removeFromStorage(movieId);
  }
}
