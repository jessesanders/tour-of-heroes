import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { HeroService } from './../../../../core/hero.service';
import { Hero } from '../../../../core/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  heroes$: Observable<Hero[]>;

  constructor(private heroService: HeroService, private router: Router) {
    this.heroService.loadHeroes();
    this.heroes$ = this.heroService.topHeroes$;
  }

  onHeroClicked(hero: Hero) {
    this.router.navigate(['/detail', hero.id]);
  }
}
