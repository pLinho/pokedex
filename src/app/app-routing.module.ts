import { ListComponent } from './views/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './views/cards/cards.component';
import { TableComponent } from './views/table/table.component';
import { ItemComponent } from './views/item/item.component';

const routes: Routes = [
  { path: 'cards', component: CardsComponent },
  { path: 'list', component: ListComponent },
  { path: 'table', component: TableComponent },
  { path: 'pokemon', component: ItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
