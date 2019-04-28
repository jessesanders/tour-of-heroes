import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './state-utils';
import { HeroState } from './hero/hero.reducer';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  hero: HeroState;
}

export type State = AppState;
