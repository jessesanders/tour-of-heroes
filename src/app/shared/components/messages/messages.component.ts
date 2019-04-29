import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from '../../../core/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  messages$: Observable<string[]>;

  constructor(private messageService: MessageService) {
    this.messages$ = this.messageService.messages$;
  }

  clear() {
    this.messageService.clear();
  }
}
