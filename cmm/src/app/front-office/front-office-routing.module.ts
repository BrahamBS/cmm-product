import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InterventionPageComponent } from './pages/intervention-page/intervention-page.component';
import { ProjetPageComponent } from './pages/projet-page/projet-page.component';
import { SuiviTierPageComponent } from './pages/suivi-tier-page/suivi-tier-page.component';
import { HomePageComponent } from '../home-page/home-page.component';



const routes: Routes = [
  {
    path: '', component: HomePageComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: 'intervention',
        component: InterventionPageComponent,
        children: []

      },

      {
        path: 'projets',
        component: ProjetPageComponent,
        children: []
      },
      {
        path: 'suivi-tier',
        component: SuiviTierPageComponent,
        children: []
      },
      {
        path: '**',
        redirectTo: 'home',
        //  pathMatch: 'full'
      }
    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }
