import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { MovieService } from '../../shared/services/movie.service';


@Component({
  selector: 'app-movies-decades-component',
  templateUrl: './movies-decades.component.html',
})
export class MoviesDecadesComponent implements OnInit, OnDestroy {

  public isLoading: boolean = false;

  public labels: string[] = [];
  public data: number[] = [];

  private _destroy$$: Subject<void> = new Subject<void>();

  public constructor(
    private _movieService: MovieService,
  ) { }

  public ngOnInit(): void {
    this.isLoading = true;
    this._movieService.getFilms$()
      .takeUntil(this._destroy$$)
      .subscribe((movies: IMovie[]) => {
        this.generateChart(movies);
      });
  }

  public ngOnDestroy(): void {
    this._destroy$$.next();
    this._destroy$$.complete();
  }

  public generateChart(movies: IMovie[]): void {
    movies.sort((a: IMovie, b: IMovie) => Number(a.year) - Number(b.year));

    movies.forEach((movie: IMovie) => {
      movie['decade'] = `${Math.floor(parseFloat((Number(movie.year) / 10).toString()))}0`;
    });

    for (let i = 0; i < movies.length; i++) {
      if ((this.labels.filter((label: string) => movies[i]['decade'] === label).length === 0)) {
        this.labels.push(movies[i]['decade']);
        this.data.splice(this.labels.indexOf(movies[i]['decade']), 0, 1);
      } else {
        this.data[this.labels.indexOf(movies[i]['decade'])]++;
      }
    }

    this.isLoading = false;
  }
}
