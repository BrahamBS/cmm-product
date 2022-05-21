import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandpageComponent } from './landpage/landpage.component';
import { HomeComponent } from './pages/home/home.component';
import { InterventionPageComponent } from './pages/intervention-page/intervention-page.component';
import { ProjetPageComponent } from './pages/projet-page/projet-page.component';
import { SuiviTierPageComponent } from './pages/suivi-tier-page/suivi-tier-page.component';



const routes: Routes = [
  {
    path: '', component: LandpageComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
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
