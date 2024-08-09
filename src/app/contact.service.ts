import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private serviceID = 'service_ozcihkk';
  private templateID = 'template_uqg260i';
  private userID = '7dYoxn_T15f7JEgfR';
 
  constructor() { }
 
  sendContactEmail(formData: { name: string; email: string; subject: string; message: string }): Promise<any> {
    return emailjs.send(this.serviceID, this.templateID, formData, this.userID)
      .then(response => {
        return { success: true, message: 'Your message has been sent successfully!' };
      })
      .catch(error => {
        return { success: false, message: 'There was an error sending your message. Please try again.' };
      });
  }
}
