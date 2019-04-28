import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { selectedHero } from './../../../../state/hero/index';
import { LoadHeroById } from './../../../../state/hero/hero.actions';
import { heroes } from '../../../../state/hero';
import { AppState } from '../../../../state/app.interfaces';
import { Hero } from '../../../../core/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero>;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new LoadHeroById({ id: id }));
    this.hero$ = this.store.pipe(select(selectedHero));
  }

  goBack(): void {
    this.location.back();
  }
}
