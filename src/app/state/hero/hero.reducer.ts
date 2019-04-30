import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Hero } from '../../core/hero';
import { HeroActions, HeroActionTypes } from './hero.actions';

export interface HeroState extends EntityState<Hero> {
  // additional entities state properties
  selectedId: number;
  loading: boolean;
  error: string;
}

export const adapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();

export const initialHeroState: HeroState = adapter.getInitialState({
  // additional hero state properties
  selectedId: null,
  loading: false,
  error: ''
});

export function heroReducer(state = initialHeroState, action: HeroActions): HeroState {
  switch (action.type) {

    case HeroActionTypes.SearchAllHeroEntities:
      return {
        ...adapter.removeAll(state),
        loading: true,
        error: ''
      };

    case HeroActionTypes.SearchAllHeroEntitiesSuccess:
      return {
        ...adapter.addAll(action.payload.result, state),
        loading: false,
        error: ''
      };

    case HeroActionTypes.SearchAllHeroEntitiesFail:
      return {
        ...state,
        loading: false,
        error: 'Hero search failed: ' + action.payload.error
      };

    case HeroActionTypes.LoadHeroById:
      return {
        ...adapter.removeAll(state),
        selectedId: action.payload.id,
        loading: true,
        error: ''
      };

    case HeroActionTypes.LoadHeroByIdSuccess:
      return {
        ...adapter.addOne(action.payload.result, state),
        loading: false,
        error: ''
      };

    case HeroActionTypes.LoadHeroByIdFail:
      return {
        ...state,
        loading: false,
        error: 'Hero load failed: ' + action.payload.error
      };

    default:
      return state;
  }
}

export const getSelectedId = (state: HeroState) => state.selectedId;
export const getLoading = (state: HeroState) => state.loading;
export const getError = (state: HeroState) => state.error;
