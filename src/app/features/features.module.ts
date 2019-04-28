import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardModule } from './dashboard/dashboard.module';
import { HeroesModule } from './heroes/heroes.module';
import { HeroDetailModule } from './hero-detail/hero-detail.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, DashboardModule, HeroesModule, HeroDetailModule]
})
export class FeaturesModule {}
