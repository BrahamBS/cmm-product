import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActualitePageComponent } from './pages/actualite-page/actualite-page.component';
import { ProjetPageComponent } from './pages/projet-page/projet-page.component';
import { InterventionPageComponent } from './pages/intervention-page/intervention-page.component';
import { SuiviPrestatairePageComponent } from './pages/suivi-prestataire-page/suivi-prestataire-page.component';
import { AdmiNavbarComponent } from './pages/admi-navbar/admi-navbar.component';
import { AdmiFooterComponent } from './pages/admi-footer/admi-footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminLandPageComponent } from './pages/admin-land-page/admin-land-page.component';
import { BackOfficeRoutingModule } from './back-office-routing.module';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [
    AdminLandPageComponent,
    ActualitePageComponent,
    ProjetPageComponent,
    InterventionPageComponent,
    SuiviPrestatairePageComponent,
    AdmiNavbarComponent,
    AdmiFooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BackOfficeRoutingModule,
    MaterialModule
  ]
})
export class BackOfficeModule { }
