import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { FilmComponent } from '../pages/film/film.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch: "full",
    component: HomeComponent
  },
  { 
    path: 'film', 
    component: FilmComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/modules/pages/film/film.module').then(m => m.FilmModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
