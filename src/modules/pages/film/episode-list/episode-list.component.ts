import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss']
})
export class EpisodeListComponent {
  @Input()
  public data : any = undefined;
  @Input()
  public active : number = 0;
  constructor() {
  }
}
