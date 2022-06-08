import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLandpageComponent } from './front-landpage/front-landpage.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginFormComponent } from './shared/user/login-form/login-form.component';
import { RegisterFormComponent } from './shared/user/register-form/register-form.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'signup',
    component: RegisterFormComponent,
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
    redirectTo: 'front',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
