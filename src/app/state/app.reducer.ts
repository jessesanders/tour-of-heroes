import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { storeFreeze } from 'ngrx-store-freeze';

import { AppState } from './app.interfaces';
import { environment } from '../../environments/environment';
import { heroReducer } from './hero/hero.reducer';
import { messageReducer } from './message/message.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  hero: heroReducer,
  messages: messageReducer,
  router: routerReducer
};

export const appMetaReducers: MetaReducer<AppState>[] = !environment.production
  ? [storeFreeze]
  : [];
