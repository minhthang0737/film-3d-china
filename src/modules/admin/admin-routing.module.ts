import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { SideBarGroupDatas } from 'src/layout/admin-layout/sidebar-admin/data/sidebar-data';

const routes: Routes = [
  { 
    path: '', 
    pathMatch: "full",
    redirectTo: SideBarGroupDatas[0].link
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule)
      }
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
