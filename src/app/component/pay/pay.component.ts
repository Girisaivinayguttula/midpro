import { Component } from '@angular/core';

@Component({
  selector: 'app-pay',
  standalone: true,
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {
  loadCard() {
    // This method can be tested for being called on button click
    window.location.href = '#'; // Simulate navigation
  }
}
