import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from 'src/layout/admin-layout/admin-layout.component';
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
    children: []
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
