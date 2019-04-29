import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import {
  exhaustMap,
  map,
  flatMap,
  catchError,
  switchMap
} from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import {
  HeroActionTypes,
  SearchAllHeroEntities,
  SearchAllHeroEntitiesSuccess,
  SearchAllHeroEntitiesFail,
  LoadHeroById,
  LoadHeroByIdSuccess,
  LoadHeroByIdFail
} from './hero.actions';
import { Hero } from '../../core/hero';
import { HeroService } from '../../core/hero.service';
import { AddMessage } from '../message/message.actions';

@Injectable()
export class HeroEffects {
  @Effect()
  search = this.actions$.pipe(
    ofType<SearchAllHeroEntities>(HeroActionTypes.SearchAllHeroEntities),
    exhaustMap(() =>
      this.service.getHeroes().pipe(
        flatMap(
          (entities: Array<Hero>) => [
            new SearchAllHeroEntitiesSuccess({ result: entities }),
            new AddMessage('HeroService: fetched heroes')
          ]),
        catchError(({ message }) =>
          of(new SearchAllHeroEntitiesFail({ error: message }))
        )
      )
    )
  );

  @Effect()
  loadById = this.actions$.pipe(
    ofType<LoadHeroById>(HeroActionTypes.LoadHeroById),
    switchMap(action =>
      this.service.getHero(action.payload.id).pipe(
        flatMap((hero: Hero) => [
          new LoadHeroByIdSuccess({ result: hero }),
          new AddMessage(`HeroService: fetched hero id=${hero.id}`)
        ]),
        catchError(({ message }) =>
          of(new LoadHeroByIdFail({ error: message }))
        )
      )
    )
  );

  constructor(private actions$: Actions,
    private service: HeroService) { }
}
