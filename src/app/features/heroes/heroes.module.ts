import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './containers/heroes/heroes.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';

@NgModule({
  declarations: [HeroesComponent, HeroesListComponent],
  imports: [CommonModule, HeroesRoutingModule]
})
export class HeroesModule {}
