import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboarComponent } from './dashboar/dashboar.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {
    path: 'dashboar',
    component: DashboarComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
