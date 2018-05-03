import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';

import { Chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts';
import './rxjs-operators';

import { MovieService } from './services/movie.service';
import { WindowService } from './services/window.service';
import { LocalStorageService } from './services/local-storage.service';
import { LoaderComponent } from './components/loader/loader.component';
import { MovieModalComponent } from './components/movie-modal/movie-modal.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { FavoriteMoviesComponent } from './components/movie-card/movie-card.component';


@NgModule({
  declarations: [
    LoaderComponent,
    MovieModalComponent,
    SafeHtmlPipe,
    FavoriteMoviesComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTooltipModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    ChartsModule,
    LoaderComponent,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    MatTooltipModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MovieModalComponent,
    FavoriteMoviesComponent,
  ],
  providers: [
    MovieService,
    WindowService,
    LocalStorageService,
  ],
  entryComponents: [
    MovieModalComponent,
  ],
})
export class SharedModule { }
