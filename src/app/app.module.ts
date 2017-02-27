import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { AboutComponent } from './about/about.component';

import { ContactService } from './contact.service';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

var firebaseCredentialsFile = require("../firebase.priv.json");

export const firebaseConfig = {
    apiKey: firebaseCredentialsFile["apiKey"],
    authDomain: firebaseCredentialsFile["authDomain"],
    databaseURL: firebaseCredentialsFile["databaseURL"],
    storageBucket: firebaseCredentialsFile["storageBucket"],
    messagingSenderId: firebaseCredentialsFile["messagingSenderId"]
  };

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    AboutComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }