import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderPate4931Component } from './header-pate4931/header-pate4931.component';
import { FooterPate4931Component } from './footer-pate4931/footer-patel4931.component';
import { BooksPate4931Component } from './books-pate4931/books-pate4931.component';
import { CampusPate4931Component } from './campus-pate4931/campus-pate4931.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPate4931Component,
    FooterPate4931Component,
    BooksPate4931Component,
    CampusPate4931Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
