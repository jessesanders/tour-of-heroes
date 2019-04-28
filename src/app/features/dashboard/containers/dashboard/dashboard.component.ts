import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { SearchAllHeroEntities } from './../../../../state/hero/hero.actions';
import { topHeroes } from '../../../../state/hero';
import { AppState } from '../../../../state/app.interfaces';
import { Hero } from '../../../../core/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  heroes$: Observable<Hero[]>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.heroes$ = this.store.pipe(select(topHeroes));
    this.store.dispatch(new SearchAllHeroEntities());
  }

  onHeroClicked(hero: Hero) {
    this.router.navigate(['/detail', hero.id]);
  }
}
