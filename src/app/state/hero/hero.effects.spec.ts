import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import {
  SearchAllHeroEntities,
  SearchAllHeroEntitiesSuccess,
  SearchAllHeroEntitiesFail,
  LoadHeroById,
  LoadHeroByIdSuccess,
  LoadHeroByIdFail
} from './hero.actions';
import { generateHero, generateHeroArray } from '../../core/hero';
// TODO: Change this path when you move your service file:
import { HeroService } from '../../core/hero.service';
import { HeroEffects } from './hero.effects';

describe('HeroEffects', () => {
  let actions: Observable<any>;
  let effects: HeroEffects;
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HeroEffects,
        provideMockActions(() => actions),
        {
          provide: HeroService,
          useValue: { getHero: jest.fn(), getHeroes: jest.fn() }
        },
      ]
    });

    effects = TestBed.get(HeroEffects);
    service = TestBed.get(HeroService);
  });

  it('should be constructed', () => {
    expect(effects).toBeTruthy();
  });

  describe('search', () => {
    it('should return SearchAllHeroEntitiesSuccess action with entities on success', () => {
      const entities = generateHeroArray(),
        searchAction = new SearchAllHeroEntities(),
        successAction = new SearchAllHeroEntitiesSuccess({ result: entities }),
        response = cold('-a|', { a: entities }),
        expected = cold('-s', { s: successAction });

      actions = hot('a-', { a: searchAction });

      service.getHeroes = jest.fn(() => response);

      expect(effects.search).toBeObservable(expected);
    });

    it('should return SearchAllHeroEntitiesFail with error object on failure', () => {
      const searchAction = new SearchAllHeroEntities(),
        failAction = new SearchAllHeroEntitiesFail({ error: 'fail' }),
        response = cold('-#|', {}, { message: 'fail' }),
        expected = cold('-f', { f: failAction });

      actions = hot('a-', { a: searchAction });

      service.getHeroes = jest.fn(() => response);

      expect(effects.search).toBeObservable(expected);
    });
  });

  describe('loadById', () => {
    it('should return LoadHeroByIdSuccess action with entity on success', () => {
      const entity = generateHero(),
       loadAction = new LoadHeroById({ id: entity.id }),
       successAction = new LoadHeroByIdSuccess({ result: entity }),
       response = cold('-e|', { e: entity }),
       expected = cold('-s', { s: successAction });

      actions = hot('a-', { a: loadAction });

      service.getHero = jest.fn(() => response);

      expect(effects.loadById).toBeObservable(expected);
    });

    it('should return LoadHeroByIdFail with error object on failure', () => {
      const entity = generateHero(),
       loadAction = new LoadHeroById({ id: entity.id }),
       failAction = new LoadHeroByIdFail({ error: 'fail' }),
       response = cold('-#|', {}, { message: 'fail' }),
       expected = cold('-f', { f: failAction });

      actions = hot('a-', { a: loadAction });

      service.getHero = jest.fn(() => response);

      expect(effects.loadById).toBeObservable(expected);
    });
  });
});
