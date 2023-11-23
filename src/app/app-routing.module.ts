import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from 'src/layout/admin-layout/admin-layout.component';
import { DefaultLayoutComponent } from 'src/layout/default-layout/default-layout.component';
import { LoginComponent } from 'src/modules/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    data: {
      title: 'Home'
    },
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/modules/default/default.module').then(m => m.DefaultModule)
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    data: {
      title: 'Administrator'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('../modules/admin/admin.module').then(m => m.AdminModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
