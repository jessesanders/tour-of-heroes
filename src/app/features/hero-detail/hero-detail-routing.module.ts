import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroDetailComponent } from './containers/hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HeroDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroDetailRoutingModule {}
