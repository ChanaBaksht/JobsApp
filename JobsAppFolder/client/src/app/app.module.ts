import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

<<<<<<< HEAD
import { HttpClientModule } from "@angular/common/http";
=======
import {  HttpClientModule } from "@angular/common/http";
>>>>>>> Section-5--Client-login-and-register
import { NavComponent } from './nav/nav.component'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
<<<<<<< HEAD

=======
>>>>>>> Section-5--Client-login-and-register

//update commponents:
@NgModule({

  //Components:
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent
  ],
  
  //Packages that imported:
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
<<<<<<< HEAD
    BrowserAnimationsModule, 
    BsDropdownModule.forRoot(),

  ],
  providers: [],

  //start with:
=======
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [],

  //To view the application, Start run the root component: (-It is not the bootstrap of styling!)
>>>>>>> Section-5--Client-login-and-register
  bootstrap: [AppComponent]
})
export class AppModule { }
