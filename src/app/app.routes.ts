import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Inventory } from './inventory/inventory';
import { Supplier } from './supplier/supplier';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'inventory', component: Inventory },
  { path: 'supplier', component: Supplier }
];