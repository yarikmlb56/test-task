import { Routes } from '@angular/router';

import { Top20MoviesComponent } from './components/top-20-movies/top-20-movies.component';
import { FavoriteMoviesComponent } from './components/favorite-movies/favorite-movies.component';
import { MoviesDecadesComponent } from './components/movies-decades/movies-decades.component';


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

