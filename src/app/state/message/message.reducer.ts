import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as messageActions from './message.actions';

export interface MessageState {
  messages: string[];
}

export const initialState: MessageState = {
  messages: []
};

export function messageReducer(
  state = initialState,
  action: messageActions.MessageActions
): MessageState {
  switch (action.type) {
    case messageActions.MessageActionTypes.AddMessage: {
      return {
        messages: [...state.messages, action.message]
      };
    }

    case messageActions.MessageActionTypes.ClearMessages: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}
