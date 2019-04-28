import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { TopHeroesListComponent } from '@features/dashboard/components/top-heroes-list/top-heroes-list.component';
import { HeroService } from '@core/hero.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroMockService } from '@core/hero.mock.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DashboardComponent, TopHeroesListComponent],
      providers: [{ provide: HeroService, useClass: HeroMockService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
