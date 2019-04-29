import { createSelector } from '@ngrx/store';

import { MessageState } from './message.reducer';

export interface AppState {
  messages: MessageState;
}

export const messageFeature = (state: AppState) => state.messages;

export const messages = createSelector(
  messageFeature,
  message => message.messages
);
