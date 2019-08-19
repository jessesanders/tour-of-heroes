import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { DefaultDataServiceConfig, NgrxDataModule } from 'ngrx-data';
import { entityConfig } from './core/entity-metadata';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    NgrxDataModule.forRoot(entityConfig),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
