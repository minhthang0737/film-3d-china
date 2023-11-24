import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmInfoComponent } from './film-info/film-info.component';
import { AppVideoComponent } from './app-video/app-video.component';

const routes: Routes = [
  { 
    path: ':plugfull',
    component: FilmInfoComponent,
  },
  { 
    path: ':plugfull/:esado', 
    component: AppVideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmRoutingModule { }
