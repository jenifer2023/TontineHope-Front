import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent }  from '../app.component';
import { HttpClientModule } from '@angular/common/http';
import {  RouterModule } from '@angular/router';
import { routes } from '../app.routes'; 
import { LogInPageComponent } from '../pages/log-in-page/log-in-page.component';
import { SignUpPageComponent } from '../pages/sign-up-page/sign-up-page.component';



@NgModule({
  declarations: [AppComponent,LogInPageComponent, ,SignUpPageComponent],
  imports: [
    CommonModule, NgModule, BrowserModule, AppComponent,FormsModule,
    ReactiveFormsModule, BrowserAnimationsModule, HttpClientModule, RouterModule.forRoot(routes)
  ]
})
export class AppModuleModule { }
