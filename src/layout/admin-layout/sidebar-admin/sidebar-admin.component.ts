import { Component } from '@angular/core';
import { SideBarGroupDatas } from './data/sidebar-data';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})
export class SidebarAdminComponent {
  public sidebarDatas = SideBarGroupDatas
  public expan = false;
  constructor() {
  }

  public onClickExpan(index : number) {
      this.sidebarDatas[index].expan = !this.sidebarDatas[index].expan
  }
}
