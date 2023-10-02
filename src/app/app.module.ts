import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyDwFF9UTwv3eks0eb8vjm-iGYTOfiKvZz0",
  authDomain: "resolvtech-78706.firebaseapp.com",
  projectId: "resolvtech-78706",
  storageBucket: "resolvtech-78706.appspot.com",
  messagingSenderId: "227841753668",
  appId: "1:227841753668:web:7f96378ac558ac0ad3b211"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SidebarComponent,
    AngularFireModule.initializeApp(firebaseConfig),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
