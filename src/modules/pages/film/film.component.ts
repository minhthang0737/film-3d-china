import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HeaderTitleService } from 'src/service/HeaderTitleService';
import { DataTest } from 'src/util/DataTest';

@Component({
  selector: 'film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit{
  @Input()
  public data: any;
  public esadoActive: number = 0;
  public episodes: Array<number> = [];
  constructor() {}
  ngOnInit(): void {
  }
  getEsadoActive(value: string) {
    const esadoActiveStr = value.match(/\d+/);
    esadoActiveStr && esadoActiveStr[0] ? this.esadoActive = parseInt(esadoActiveStr[0]) : null;
    console.log(this.esadoActive)
  }
}

