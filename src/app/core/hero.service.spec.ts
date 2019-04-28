import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });
});
