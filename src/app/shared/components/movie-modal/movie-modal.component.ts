import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Subject } from 'rxjs/Subject';

import { MovieService } from '../../../shared/services/movie.service';


@Component({
  selector: 'app-movie-modal-component',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss']
})
export class MovieModalComponent implements OnInit, OnDestroy {

  public isLoading: boolean;
  public trailers: ITrailer[];
  public movieName: string;
  public retryAttempt: number = 0;

  private readonly _MAX_RETRY: number = 1;
  private _destroy$$: Subject<void> = new Subject<void>();

  public constructor(
    public dialogRef: MatDialogRef<MovieModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      movie: IMovie,
    },
    private _filmsService: MovieService,
  ) {}

  public ngOnInit(): void {
    this.isLoading = true;
    this.movieName = this.data.movie.title.replace(/ /g, '-').toLocaleLowerCase()
    this.getTrailers();
  }

  public ngOnDestroy(): void {
    this._destroy$$.next();
    this._destroy$$.complete();
  }

  public getTrailers(): any {
    return this._filmsService.getTrailers$(this.movieName)
      .takeUntil(this._destroy$$)
      .catch((err: any) => {
        if (this.retryAttempt < this._MAX_RETRY) {
          this.retryAttempt++;
          return this._filmsService.getTrailers$(this.movieName.replace(/^\w+\-/, ''));
        }

        return err;
      })
      .subscribe((trailers: ITrailer[]) => {
        this.trailers = trailers;
        this.isLoading = false;
      });
  }

  public closeModal(): void {
    this.dialogRef.close();
  }
}
