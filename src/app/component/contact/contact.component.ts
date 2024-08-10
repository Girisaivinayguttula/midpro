import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,  
  imports: [FormsModule,CommonModule], 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  message: string | null = null;
 
  constructor(private contactService: ContactService) { }
 
  sendEmail(): void {
    this.contactService.sendContactEmail(this.formData)
      .then(response => {
        this.message = response.message;
        if (response.success) {
          this.formData = { name: '', email: '', subject: '', message: '' };
        }
      })
      .catch(error => {
        this.message = 'There was an error sending your message. Please try again.';
      });
  }
}
