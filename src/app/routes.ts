import { Routes } from '@angular/router';

import { Top20MoviesComponent } from './src/top-20-movies/top-20-movies.component';
import { FavoriteMoviesComponent } from './src/favorite-movies/favorite-movies.component';
import { MoviesDecadesComponent } from './src/movies-decades/movies-decades.component';


export const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'top-20-movies'
      },
      {
        path: 'top-20-movies',
        component: Top20MoviesComponent
      },
      {
        path: 'favorite-movies',
        component: FavoriteMoviesComponent
      },
      {
        path: 'movies-on-decades',
        component: MoviesDecadesComponent
      },
    ]
  },
];
