import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { TopHeroesListComponent } from './components/top-heroes-list/top-heroes-list.component';

@NgModule({
  declarations: [DashboardComponent, TopHeroesListComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
