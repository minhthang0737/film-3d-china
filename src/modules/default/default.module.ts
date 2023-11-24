import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from 'src/component/components.module';
import { HomeComponent } from '../pages/home/home.component';
import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    ComponentsModule,
  ]
})
export class DefaultModule { }
