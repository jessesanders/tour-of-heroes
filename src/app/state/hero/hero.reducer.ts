import { Hero } from '../../core/hero';

import * as heroActions from './hero.actions';

export interface HeroState {
  heroes: Hero[];
  hero: Hero;
}

export const initialState: HeroState = {
  heroes: [],
  hero: null
};

export function heroReducer(
  state = initialState,
  action: heroActions.HeroActions
): HeroState {
  switch (action.type) {
    case heroActions.HeroActionTypes.SearchAllHeroEntitiesSuccess: {
      return {
        hero: null,
        heroes: action.payload.result
      };
    }

    case heroActions.HeroActionTypes.LoadHeroByIdSuccess: {
      return {
        heroes: [],
        hero: action.payload.result
      };
    }

    default: {
      return state;
    }
  }
}
