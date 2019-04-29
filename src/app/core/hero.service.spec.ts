import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { Store } from '@ngrx/store';

import { TestStore } from '../testing/test.store';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [{provide: Store, useClass: TestStore}]
    });
  });

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });
});
