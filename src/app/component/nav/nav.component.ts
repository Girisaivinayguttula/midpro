import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NgClass],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
