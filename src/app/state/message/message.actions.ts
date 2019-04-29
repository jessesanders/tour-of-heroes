import { Action } from '@ngrx/store';

export enum MessageActionTypes {
  AddMessage = '[Message] Add',
  ClearMessages = '[Message] Clear'
}

export class AddMessage implements Action {
  readonly type = MessageActionTypes.AddMessage;
  constructor(public  message: string) {}
}

export class ClearMessages implements Action {
  readonly type = MessageActionTypes.ClearMessages;
}

export type MessageActions =
  | AddMessage
  | ClearMessages;
