import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,  // If using standalone components (Angular 14+)
  imports: [HeaderComponent, NavComponent, FooterComponent, RouterModule],  // Importing required components
})
export class HomeComponent {}
