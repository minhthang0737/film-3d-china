import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmInfoComponent } from './film-info/film-info.component';
import { AppVideoComponent } from './app-video/app-video.component';
import { FilmComponent } from './film.component';

const routes: Routes = [
    { 
      path: ':plugfull',
      pathMatch: 'prefix',
      component: FilmInfoComponent
    },
    { 
      path: ':plugfull/:esado',
      pathMatch: 'full',
      component: AppVideoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmRoutingModule { }
