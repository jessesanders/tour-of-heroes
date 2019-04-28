import { Observable, of } from 'rxjs';
import { Hero } from '@core/hero';

export class HeroMockService {
  getHeroes(): Observable<Hero[]> {
    return of([]);
  }

  getTopHeroes(): Observable<Hero[]> {
    return of([]);
  }

  getHero(id: number): Observable<Hero> {
    return of(null);
  }
}
