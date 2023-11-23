import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { title } from 'src/util/MasterData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private title: Title) {}
  
  ngOnInit(): void {
    const value = title.get(window.location.pathname)
    this.title.setTitle(value ? value : "Film3dChina")
  }
}
