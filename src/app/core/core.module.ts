import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemHeroService } from './inMemHeroService';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService)
  ],
  exports: []
})
export class CoreModule {}
