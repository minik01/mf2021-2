import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {EventPlanComponent} from './event-plan/event-plan.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule, BUCKET} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { PlayerComponent } from './player/player.component';


const config = {
  apiKey: 'AIzaSyBrdc7hxMxtb23zxXAnR0N3ZY20tntcgOI',
  authDomain: 'mf2021-dw.firebaseapp.com',
  projectId: 'mf2021-dw',
  storageBucket: 'mf2021-dw.appspot.com',
  messagingSenderId: '829472028067',
  appId: '1:829472028067:web:65ee16acdd60f8d41dd616',
};

@NgModule({
  declarations: [
    AppComponent,
    EventPlanComponent,
    DashboardComponent,
    LoginComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatTabsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    FormsModule,
    // storage
  ],
  providers: [
    { provide: BUCKET, useValue: 'mf2021-dw.appspot.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
