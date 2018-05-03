import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import './shared/rxjs-operators';

import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { Top20MoviesComponent } from './components/top-20-movies/top-20-movies.component';
import { FavoriteMoviesComponent } from './components/favorite-movies/favorite-movies.component';
import { MoviesDecadesComponent } from './components/movies-decades/movies-decades.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Top20MoviesComponent,
    FavoriteMoviesComponent,
    MoviesDecadesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
