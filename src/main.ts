import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';  // Importiere die App-Konfiguration

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));