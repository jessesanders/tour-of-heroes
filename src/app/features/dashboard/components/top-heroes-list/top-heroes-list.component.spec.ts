import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeroesListComponent } from './top-heroes-list.component';

describe('TopHeroesListComponent', () => {
  let component: TopHeroesListComponent;
  let fixture: ComponentFixture<TopHeroesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHeroesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
