import { Component, EventEmitter, Input, Output } from '@angular/core';

import { WindowService } from '../../services/window.service';
import { LocalStorageService } from '../../services/local-storage.service';


@Component({
  selector: 'app-movie-card-component',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class FavoriteMoviesComponent {

  @Input() public movies: IMovie[];
  @Output() public removeFromFavoriteList: EventEmitter<string> = new EventEmitter<string>();
  @Output() public addToFavoriteList: EventEmitter<string> = new EventEmitter<string>();
  @Output() public openPreviewDialog: EventEmitter<IMovie> = new EventEmitter<IMovie>();

  public readonly _DIRECTOR_URL: string = 'https://www.imdb.com/name/:directorId';

  public constructor(
    private _windowService: WindowService,
    private _localStorageService: LocalStorageService,
  ) { }

  public navigateToDirector(directorId: number): void {
    const link: string = this._DIRECTOR_URL
      .replace(':directorId', String(directorId));

    this._windowService.openNewTab(link);
  }

  public isFavorite(movieId: string): boolean {
    return this._localStorageService.isExist(movieId);
  }

  public removeFromFavorite(movieId: string): void {
    this.removeFromFavoriteList.emit(movieId);
  }

  public addToFavorite(movieId: string): void {
    this.addToFavoriteList.emit(movieId);
  }

  public openDialog(movie: IMovie): void {
    this.openPreviewDialog.emit(movie);
  }
}
