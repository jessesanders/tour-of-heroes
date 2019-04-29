import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './state-utils';
import { HeroState } from './hero/hero.reducer';
import { MessageState } from './message/message.reducer';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  hero: HeroState;
  messages: MessageState;
}

export type State = AppState;
