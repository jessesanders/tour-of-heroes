import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { messages } from '../state/message';
import { ClearMessages } from '../state/message/message.actions';
import { AppState } from '../state/app.interfaces';

@Injectable({ providedIn: 'root' })
export class MessageService {
  constructor(
    private store: Store<AppState>
  ) { }

  get messages$(): Observable<string[]> {
    return this.store.pipe(
      select(messages)
    );
  }

  clear() {
    this.store.dispatch(new ClearMessages());
  }
}
