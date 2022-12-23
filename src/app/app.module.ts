import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokedexApiModule } from 'src/api/api.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardsComponent } from './views/cards/cards.component';
import { ItemComponent } from './views/item/item.component';
import { ListComponent } from './views/list/list.component';
import { TableComponent } from './views/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatTabsModule } from '@angular/material/tabs';
import { BattleComponent } from './views/battle/battle.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    TableComponent,
    ListComponent,
    ItemComponent,
    BattleComponent,
  ],
  imports: [
    PokedexApiModule.forRoot({
      endpoint: 'https://pokeapi.co/api/v2/',
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
