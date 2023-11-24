import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from 'src/component/components.module';
import { LoginComponent } from 'src/modules/login/login.component';
import { AdminModule } from 'src/modules/admin/admin.module';
import { AdminLayoutComponent } from 'src/layout/admin-layout/admin-layout.component';
import { SidebarAdminComponent } from 'src/layout/admin-layout/sidebar-admin/sidebar-admin.component';
import { NavBarAdminComponent } from 'src/layout/admin-layout/nav-bar-admin/nav-bar-admin.component';
import { FooterAdminComponent } from 'src/layout/admin-layout/footer-admin/footer-admin.component';
import { DefaultHeaderComponent } from 'src/layout/default-layout/default-header/default-header.component';
import { DefaultMainComponent } from 'src/layout/default-layout/default-main/default-main.component';
import { DefaultFooterComponent } from 'src/layout/default-layout/default-footer/default-footer.component';
import { DefaultModule } from 'src/modules/default/default.module';
import { DefaultLayoutComponent } from 'src/layout/default-layout/default-layout.component';
import { DefaultNavbarComponent } from 'src/layout/default-layout/default-navbar/default-navbar.component';
import { FilmModule } from 'src/modules/pages/film/film.module';

const COMPONENT_USED = [
  LoginComponent,
  AdminLayoutComponent,
  DefaultLayoutComponent,
  SidebarAdminComponent,
  NavBarAdminComponent,
  FooterAdminComponent,
  DefaultHeaderComponent,
  DefaultMainComponent,
  DefaultNavbarComponent,
  DefaultFooterComponent
]
const MODULES_USED = [
  ComponentsModule,
  AdminModule,
  DefaultModule,
]
@NgModule({
  declarations: [
    AppComponent, ...COMPONENT_USED
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...MODULES_USED
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
