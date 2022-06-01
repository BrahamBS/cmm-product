import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'front',
    loadChildren: () => import('./front-office/front-office.module').then(m => m.FrontOfficeModule),
    // canLoad:[AuthGuard],
    // canActivate:[AuthGuard],
    // canActivateChild:[AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule),
    // canLoad:[AuthGuard,AdminGuard],
    // canActivate:[AuthGuard,AdminGuard],
    // canActivateChild:[AuthGuard,AdminGuard]
  }
  , 
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
