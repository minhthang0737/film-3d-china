import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboarComponent } from './dashboar/dashboar.component';
import { SettingComponent } from './setting/setting.component';


@NgModule({
  declarations: [
    DashboarComponent,
    SettingComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
