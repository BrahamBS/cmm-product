import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandpageComponent } from './landpage/landpage.component';


import { MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { HomeComponent } from './pages/home/home.component';
import { ProjetPageComponent } from './pages/projet-page/projet-page.component';
import { SuiviTierPageComponent } from './pages/suivi-tier-page/suivi-tier-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { InterventionPageComponent } from './pages/intervention-page/intervention-page.component';
import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { UserModule } from '../shared/user/user.module';
import { RouterModule } from '@angular/router';
import { FrontFooterComponent } from './pages/front-footer/front-footer.component';




@NgModule({
  declarations: [
    LandpageComponent,
    HomeComponent,
    ProjetPageComponent,
    SuiviTierPageComponent,
    ContactPageComponent,
    InterventionPageComponent,
    FrontFooterComponent
  ],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule,
    MaterialModule,
    UserModule
  ],
  exports: [
    LandpageComponent,
    HomeComponent,
    ProjetPageComponent,
    SuiviTierPageComponent,
    ContactPageComponent,
    InterventionPageComponent,
    FrontFooterComponent
  ],
})
export class FrontOfficeModule { }
