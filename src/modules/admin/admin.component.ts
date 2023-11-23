import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SideBarGroupDatas } from 'src/layout/admin-layout/sidebar-admin/data/sidebar-data';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(private router: Router) {
  }
}
