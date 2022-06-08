import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { UserModule } from './shared/user/user.module';
import { FrontOfficeModule } from './front-office/front-office.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BackOfficeModule } from './back-office/back-office.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FrontLandpageComponent } from './front-landpage/front-landpage.component';



@NgModule({
  declarations: [
    ConfirmationDialogComponent,
    AppComponent,
    HomePageComponent,
    FrontLandpageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    UserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FrontOfficeModule,
    BackOfficeModule,
    AngularEditorModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
