import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmInfoComponent } from './film-info.component';

describe('FilmInfoComponent', () => {
  let component: FilmInfoComponent;
  let fixture: ComponentFixture<FilmInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmInfoComponent]
    });
    fixture = TestBed.createComponent(FilmInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
