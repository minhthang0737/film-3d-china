import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataTest } from 'src/util/DataTest';
import { Header } from './data/data_info';

@Component({
  selector: 'film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.scss'],
})
export class FilmInfoComponent implements OnInit {
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
