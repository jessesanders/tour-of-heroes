import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromHeroState from './hero.reducer';
import { HeroState } from './hero.reducer';

export const getHeroState = createFeatureSelector<HeroState>('hero');

export const {
  selectIds: heroIds,
  selectEntities: entities,
  selectAll: heroes,
  selectTotal: heroCount
} = fromHeroState.adapter.getSelectors(getHeroState);

export const topHeroes = createSelector(
  heroes,
  data => data.slice(1, 5)
);

export const selectedHeroId = createSelector(
  getHeroState,
  fromHeroState.getSelectedId
);

export const selectedHero = createSelector(
  selectedHeroId,
  entities,
  (heroId, heroEntities) =>
    heroId && heroEntities[heroId]
);

export const heroLoading = createSelector(
  getHeroState,
  fromHeroState.getLoading
);

export const heroError = createSelector(
  getHeroState,
  fromHeroState.getError
);
