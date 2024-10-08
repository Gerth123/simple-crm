import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { MatNativeDateModule } from '@angular/material/core';  // Richtige Bereitstellung des nativen DateModules

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideFirebaseApp(() => initializeApp({
      "projectId": "simple-crm-aa940",
      "appId": "1:442328058070:web:feddf2b6a06f77ef176177",
      "databaseURL": "https://simple-crm-aa940-default-rtdb.europe-west1.firebasedatabase.app",
      "storageBucket": "simple-crm-aa940.appspot.com",
      "apiKey": "AIzaSyAcMVyKgsthPlfaUJy6SiviobSQToEO5g0",
      "authDomain": "simple-crm-aa940.firebaseapp.com",
      "messagingSenderId": "442328058070"
    })),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    MatNativeDateModule, 
  ],
};
