import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { GiftComponent } from './component/gift/gift.component';
import { OrderComponent } from './component/order/order.component';
import { PayComponent } from './component/pay/pay.component';
import { StoreComponent } from './component/store/store.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'gift', component: GiftComponent, data: { title: 'Gift' } },
  { path: 'order', component: OrderComponent, data: { title: 'Order' } },
  { path: 'pay', component: PayComponent, data: { title: 'Pay' } },
  { path: 'store', component: StoreComponent, data: { title: 'Store' } },
];
