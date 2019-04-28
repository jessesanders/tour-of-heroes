import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: './features/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'detail/:id',
    loadChildren: './features/hero-detail/hero-detail.module#HeroDetailModule'
  },
  { path: 'heroes',
    loadChildren: './features/heroes/heroes.module#HeroesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
