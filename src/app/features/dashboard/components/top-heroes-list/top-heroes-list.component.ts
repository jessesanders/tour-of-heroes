import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '@core/hero';

@Component({
  selector: 'app-top-heroes-list',
  templateUrl: './top-heroes-list.component.html',
  styleUrls: ['./top-heroes-list.component.scss']
})
export class TopHeroesListComponent {
  @Input() heroes: Hero[];
  @Output() heroClicked = new EventEmitter<Hero>();

  heroClick(hero: Hero) {
    this.heroClicked.emit(hero);
  }
}
