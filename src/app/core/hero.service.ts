import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>('/api/heroes');
  }

  getTopHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched top heroes');
    return this.http
      .get<Hero[]>('/api/heroes')
      .pipe(map(hereos => hereos.slice(1, 5)));
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>(`/api/heroes/${id}`);
  }
}
