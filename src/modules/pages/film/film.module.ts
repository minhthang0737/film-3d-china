import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FilmRoutingModule } from './film-routing.module';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { FilmInfoComponent } from './film-info/film-info.component';
import { AppVideoComponent } from './app-video/app-video.component';
import { FilmComponent } from './film.component';


@NgModule({
  declarations: [
    EpisodeListComponent,
    FilmInfoComponent,
    AppVideoComponent,
    FilmComponent
  ],
  imports: [
    CommonModule,
    FilmRoutingModule
  ]
})
export class FilmModule {

}