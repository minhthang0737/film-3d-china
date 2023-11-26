import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderTitleService } from 'src/service/HeaderTitleService';
import { Header } from '../film-info/data/data_info';
import { DataTest } from 'src/util/DataTest';

@Component({
  selector: 'app-video',
  templateUrl: './app-video.component.html',
  styleUrls: ['./app-video.component.scss']
})
export class AppVideoComponent implements OnInit {
  public data: any;
  public dataMap = Header;
  constructor(private route : ActivatedRoute) {
    this.route.params.subscribe(params => {
      params['plugfull'] ? this.getData(params['plugfull']) : null;
    })
  }
  getData(value: any) {
    this.data = JSON.parse(DataTest.filmInfor);
    
  }
  ngOnInit(): void {
  }

}
