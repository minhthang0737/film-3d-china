import { Component } from '@angular/core';
import { urlHome } from 'src/util/MasterData';

@Component({
  selector: 'default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent {
  public domain:string = "";
  constructor() {
    this.domain = urlHome().toString();
  }
}
