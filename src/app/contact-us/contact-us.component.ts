import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// 1. Define the component FIRST
@Component({
  selector: 'app-contact',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  submitted: boolean = false;

  onSubmit() {
    if (this.name && this.email && this.message) {
      this.submitted = true;
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
}

// 2. Then define the NgModule
@NgModule({
  declarations: [ContactComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [ContactComponent]
})
export class AppModule {}
