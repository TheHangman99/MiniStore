import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ContactComponent } from './app/contact-us/contact-us.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ContactComponent,
    // other components
  ],
  // ...
})
export class AppModule {}


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
