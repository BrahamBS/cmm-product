import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { UserModule } from './shared/user/user.module';
import { FrontOfficeModule } from './front-office/front-office.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BackOfficeModule } from './back-office/back-office.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FrontLandpageComponent } from './front-landpage/front-landpage.component';
import { InterventionModule } from './back-office/intervention/intervention.module';
import { DemandeIterventionFormComponent } from './demande-intervention/demande-itervention-form/demande-itervention-form.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';



@NgModule({
  declarations: [
    ConfirmationDialogComponent,
    AppComponent,
    HomePageComponent,
    FrontLandpageComponent,
    DemandeIterventionFormComponent,

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
    InterventionModule,
    BackOfficeModule,
    AngularEditorModule
   ],
   providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
