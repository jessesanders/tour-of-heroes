import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';

import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {
  private mheroes$ = new BehaviorSubject<Hero[]>([]);
  private mhero$ = new BehaviorSubject<Hero>(null);

  get heroes$(): Observable<Hero[]> {
    return this.mheroes$;
  }

  get hero$(): Observable<Hero> {
    return this.mhero$;
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getHeroes() {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    this.http
      .get<Hero[]>('/api/heroes')
      .subscribe(heroes => this.mheroes$.next(heroes));
  }

  getTopHeroes() {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched top heroes');
    this.http
      .get<Hero[]>('/api/heroes')
      .subscribe(heroes => this.mheroes$.next(heroes.slice(1, 5)));
  }

  getHero(id: number) {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    this.http
      .get<Hero>(`/api/heroes/${id}`)
      .subscribe(hero => this.mhero$.next(hero));
  }
}
