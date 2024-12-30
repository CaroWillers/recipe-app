import { ApplicationConfig, provideZoneChangeDetection, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser'; 
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './shared/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBKsre9LNRykbYDziCPF9q_OMXkM7Dw_pQ",
  authDomain: "rezept-app-7c746.firebaseapp.com",
  projectId: "rezept-app-7c746",
  storageBucket: "rezept-app-7c746.firebasestorage.app",
  messagingSenderId: "100244387755",
  appId: "1:100244387755:web:75114d5af40e2a5e7f04ee",
  measurementId: "G-N6FH6GE6BR"
};

@NgModule({
  imports: [MaterialModule, MatIconModule, MatMenuModule],
})
export class AppModule {}
export const appConfig: ApplicationConfig = {
  providers: [
    // Optimize change detection
    provideZoneChangeDetection({ eventCoalescing: true }),
    
    // Provide routing
    provideRouter(routes),
    
    // Enable hydration for server-side rendering
    provideClientHydration(),
    
    // Initialize Firebase App
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    
    // Firebase Authentication
    provideAuth(() => getAuth()),

    
    // Firebase Firestore
    provideFirestore(() => getFirestore()),
    
    // Firebase Realtime Database
    provideDatabase(() => getDatabase()),
    
    // Firebase Functions
    provideFunctions(() => getFunctions()),
    
    // Firebase Messaging
    provideMessaging(() => getMessaging()),
    
    // Firebase Performance Monitoring
    providePerformance(() => getPerformance()),
    
    // Firebase Storage
    provideStorage(() => getStorage()), provideAnimationsAsync(), provideAnimationsAsync()
  ],
};
