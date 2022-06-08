import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { ProjetPageComponent } from './pages/projet-page/projet-page.component';
import { SuiviTierPageComponent } from './pages/suivi-tier-page/suivi-tier-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { InterventionPageComponent } from './pages/intervention-page/intervention-page.component';
import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { UserModule } from '../shared/user/user.module';
import { RouterModule } from '@angular/router';
import { FrontFooterComponent } from './pages/front-footer/front-footer.component';
import { ActualiteCardComponent } from './actualite/actualite-card/actualite-card.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';




@NgModule({
  declarations: [
    ProjetPageComponent,
    SuiviTierPageComponent,
    ContactPageComponent,
    InterventionPageComponent,
    FrontFooterComponent,
    ActualiteCardComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule,
    MaterialModule,
    UserModule
  ],
  exports: [
    ProjetPageComponent,
    SuiviTierPageComponent,
    ContactPageComponent,
    InterventionPageComponent,
    FrontFooterComponent,
    ActualiteCardComponent,
    NavBarComponent
  ],
})
export class FrontOfficeModule { }
