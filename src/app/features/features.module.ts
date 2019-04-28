import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from '@features/dashboard/dashboard.module';
import { HeroesModule } from '@features/heroes/heroes.module';
import { HeroDetailModule } from '@features/hero-detail/hero-detail.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, DashboardModule, HeroesModule, HeroDetailModule]
})
export class FeaturesModule {}
