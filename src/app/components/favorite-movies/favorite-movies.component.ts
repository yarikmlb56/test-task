import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { LocalStorageService } from '../../shared/services/local-storage.service';
import { MovieModalComponent } from '../../shared/components/movie-modal/movie-modal.component';

@Component({
  selector: 'app-favorite-movies-component',
  templateUrl: './favorite-movies.component.html',
})
export class FavoriteMoviesComponent implements OnInit {

  public movies: IMovie[] = [];

  public constructor(
    private _localStorageService: LocalStorageService,
  private _dialog: MatDialog,
  ) {}

  public ngOnInit(): void {
    this.getFavoriteMovies();
  }

  public getFavoriteMovies(): void {
    this.movies = this._localStorageService.getItems();
  }

  public removeFromFavorite(movieId: string): void {
    this._localStorageService.removeFromStorage(movieId);
    this.getFavoriteMovies();
  }

  public openTrailerModal(movie: IMovie): void {
    this._dialog.open(MovieModalComponent, {
      width: '600px',
      height: '500px',
      data: { movie }
    });
  }
}
