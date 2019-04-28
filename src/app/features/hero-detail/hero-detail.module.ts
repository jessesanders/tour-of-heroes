import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroDetailRoutingModule } from '@features/hero-detail/hero-detail-routing.module';
import { HeroDetailComponent } from './containers/hero-detail/hero-detail.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [HeroDetailComponent, HeroComponent],
  imports: [CommonModule, FormsModule, HeroDetailRoutingModule]
})
export class HeroDetailModule {}
