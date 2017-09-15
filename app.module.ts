import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import 'hammerjs'
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { PaycuisineNavComponent } from './navbar/paycusine.nav.component';
import { AppHomepageComponent } from './homepage/app.homepage.compoent';
import { AppStoreComponent } from './store/app.store.compoent';

import { AppManageStoreComponent } from './managestore/app.managestore.compoent';
import { OwnStoreListComponent } from './managestore/ownstorelist.compoent';

import { StoreService } from './store/app.store.service';

import { AngularFireModule } from 'angularfire2';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FacebookModule } from 'ngx-facebook';

import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';

export const firebaseConfig = {
  apiKey: "AIzaSyB6I78iXFS7h8mRww7V6fhQuSXddh0RQcA",
  authDomain: "pay-cuisine.firebaseapp.com",
  databaseURL: "https://pay-cuisine.firebaseio.com",
  projectId: "pay-cuisine",
  storageBucket: "pay-cuisine.appspot.com",
  messagingSenderId: "971235894561"
};


@NgModule({
  declarations: [
    AppComponent,
    PaycuisineNavComponent,
    AppHomepageComponent,
    AppStoreComponent,
    AppManageStoreComponent,
    OwnStoreListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FacebookModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [  CacheService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
