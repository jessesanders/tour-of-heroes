import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../../../core/hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent {
  @Input() heroes: Hero[];
  @Output() heroClicked = new EventEmitter<Hero>();

  heroClick(hero: Hero) {
    this.heroClicked.emit(hero);
  }
}
