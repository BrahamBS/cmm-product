import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InterventionPageComponent } from './pages/intervention-page/intervention-page.component';
import { ProjetPageComponent } from './pages/projet-page/projet-page.component';
import { SuiviTierPageComponent } from './pages/suivi-tier-page/suivi-tier-page.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { ActualitePageComponent } from '../back-office/pages/actualite-page/actualite-page.component';
import { FrontLandpageComponent } from '../front-landpage/front-landpage.component';
import { FrontActualitePageComponent } from './pages/front-actualite-page/front-actualite-page.component';
import { DemandeIterventionFormComponent } from '../demande-intervention/demande-itervention-form/demande-itervention-form.component';
import { AuthGuard } from '../guard/auth.guard';



const routes: Routes = [
  {
    path: '', component: FrontLandpageComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: 'actualites',
        component: FrontActualitePageComponent,

      },
      {
        path: 'interventions',
        component: InterventionPageComponent,
        canActivate:[AuthGuard]

      },

      {
        path: 'projets',
        component: ProjetPageComponent,
        canActivate:[AuthGuard],
        children: []
      },
      {
        path: 'prestations',
        component: SuiviTierPageComponent,
        canActivate:[AuthGuard],
        children: []
      },
      {
        path: 'demande-intervention',
        component: DemandeIterventionFormComponent,
        canActivate:[AuthGuard]
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }
