import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatTooltipModule } from '@angular/material';

import './src/rxjs-operators';

import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { FilmsService } from './src/services/films.service';
import { NavigationComponent } from './src/navigation/navigation.component';
import { Top20MoviesComponent } from './src/top-20-movies/top-20-movies.component';
import { FavoriteMoviesComponent } from './src/favorite-movies/favorite-movies.component';
import { MoviesDecadesComponent } from './src/movies-decades/movies-decades.component';
import { WindowService } from './src/services/window.service';
import { LoaderComponent } from './src/loader/loader.component';
import { LocalStorageService } from './src/services/local-storage.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Top20MoviesComponent,
    FavoriteMoviesComponent,
    MoviesDecadesComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatTooltipModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    FilmsService,
    WindowService,
    LocalStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
