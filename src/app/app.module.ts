// CORE DEPS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { PeopleAppComponent } from './app.component';
import { HomeComponent } from './home';
import { PeopleComponent } from './people';
import { CardComponent } from './shared/card';

import { APP_ROUTES } from './app.routes';

// MATERIAL DESIGN MODULES
import {
  MatToolbarModule,
  MatCardModule,
  MatTabsModule,
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    APP_ROUTES,
  ],
  declarations: [
    PeopleAppComponent,
    HomeComponent,
    PeopleComponent,
    CardComponent
  ],
  providers: [
    HttpClient,
  ],
  bootstrap: [
    PeopleAppComponent
  ]
})
export class AppModule { }
