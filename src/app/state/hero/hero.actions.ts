import { Action } from '@ngrx/store';
import { Hero } from '../../core/hero';

export enum HeroActionTypes {
  SearchAllHeroEntities = '[Hero] Search',
  SearchAllHeroEntitiesSuccess = '[Hero] Search Success',
  SearchAllHeroEntitiesFail = '[Hero] Search Fail',

  LoadHeroById = '[Hero] Load By ID',
  LoadHeroByIdSuccess = '[Hero] Load Success',
  LoadHeroByIdFail = '[Hero] Load Fail',
}

// ========================================= SEARCH

export class SearchAllHeroEntities implements Action {
  readonly type = HeroActionTypes.SearchAllHeroEntities;
}

export class SearchAllHeroEntitiesSuccess implements Action {
  readonly type = HeroActionTypes.SearchAllHeroEntitiesSuccess;
  constructor(public payload: { result: Array<Hero> }) {}
}

export class SearchAllHeroEntitiesFail implements Action {
  readonly type = HeroActionTypes.SearchAllHeroEntitiesFail;
  constructor(public payload: { error: string }) {}
}

// ========================================= LOAD BY ID

export class LoadHeroById implements Action {
  readonly type = HeroActionTypes.LoadHeroById;
  constructor(public payload: { id: number }) {}
}

export class LoadHeroByIdSuccess implements Action {
  readonly type = HeroActionTypes.LoadHeroByIdSuccess;
  constructor(public payload: { result: Hero }) {}
}

export class LoadHeroByIdFail implements Action {
  readonly type = HeroActionTypes.LoadHeroByIdFail;
  constructor(public payload: { error: string }) {}
}

export type HeroActions =
  | SearchAllHeroEntities
  | SearchAllHeroEntitiesSuccess
  | SearchAllHeroEntitiesFail
  | LoadHeroById
  | LoadHeroByIdSuccess
  | LoadHeroByIdFail;
