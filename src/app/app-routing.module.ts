import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InventoryComponent} from './components/inventory/inventory.component';
import {SearchComponent} from './components/search/search.component';


const routes: Routes = [
  {path: '', redirectTo: '/inventory', pathMatch: 'full'},
  {path: 'inventory', component: InventoryComponent},
  {path: 'search', component: SearchComponent},
  {path: 'search/:id', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
