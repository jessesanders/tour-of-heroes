import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

import { HeroService } from './../../../../core/hero.service';
import { Hero } from '../../../../core/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero>;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.loadHero(id);
    this.hero$ = this.heroService.selectedHero$;
  }

  goBack(): void {
    this.location.back();
  }
}
