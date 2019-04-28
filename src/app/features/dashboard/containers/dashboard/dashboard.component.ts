import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HeroService } from '@core/hero.service';
import { Hero } from '@core/hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit() {
    this.heroes$ = this.heroService.getTopHeroes();
  }

  onHeroClicked(hero: Hero) {
    this.router.navigate(['/detail', hero.id]);
  }
}
