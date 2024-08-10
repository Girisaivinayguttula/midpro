import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { OrderComponent } from './component/order/order.component';
import { PayComponent } from './component/pay/pay.component';
import { aboutusComponent } from './component/aboutus/aboutus.component'; 
import { GiftComponent } from './component/gift/gift.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent, NavComponent, FooterComponent, OrderComponent,PayComponent,aboutusComponent, GiftComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mid';
}
