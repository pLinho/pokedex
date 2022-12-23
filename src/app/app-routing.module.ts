import { ListComponent } from './views/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './views/cards/cards.component';
import { TableComponent } from './views/table/table.component';
import { ItemComponent } from './views/item/item.component';
import { BattleComponent } from './views/battle/battle.component';

const routes: Routes = [
  { path: 'cards', component: CardsComponent },
  { path: '', component: ListComponent },
  { path: 'table', component: TableComponent },
  { path: 'pokemon', component: ItemComponent },
  { path: 'battle', component: BattleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
