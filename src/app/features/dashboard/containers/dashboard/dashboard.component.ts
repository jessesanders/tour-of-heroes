import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HeroService } from '../../../../core/hero.service';
import { Hero } from '../../../../core/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit() {
    this.heroes$ = this.heroService.getAll().pipe(
      map(heroes=> heroes.slice(1, 5))
    );
  }

  onHeroClicked(hero: Hero) {
    this.router.navigate(['/detail', hero.id]);
  }
}
