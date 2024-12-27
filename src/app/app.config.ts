import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
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

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCVKOlVDQuVEmywObZ82WHtydtRuFL_UFk",
  authDomain: "recipe-app-62f37.firebaseapp.com",
  projectId: "recipe-app-62f37",
  storageBucket: "recipe-app-62f37.firebasestorage.app",
  messagingSenderId: "1027616797812",
  appId: "1:1027616797812:web:5a9efb56d63cccc91dcd21",
  measurementId: "G-M314DMYXM1"
};

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
    
    // Firebase App Check with ReCaptcha Enterprise
    provideAppCheck(() => {
      const provider = new ReCaptchaEnterpriseProvider('your-recaptcha-enterprise-site-key');
      return initializeAppCheck(undefined, {
        provider,
        isTokenAutoRefreshEnabled: true,
      });
    }),
    
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
    provideStorage(() => getStorage())
  ],
};
