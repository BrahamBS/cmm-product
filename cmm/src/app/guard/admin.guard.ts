import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Router, RouterStateSnapshot, UrlTree, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../shared/user/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild, CanLoad {
  
  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  canActivate( next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.role==="admin") {
        // logged in so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/front/home'], { queryParams: { returnUrl: state.url } });
    return false;
  }
  
  canActivateChild(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authenticationService.currentUserValue;
      if (currentUser && currentUser.role ==="admin") {
          // logged in so return true
          return true;
      }

      // not logged in so redirect to login page with the return url
      this.router.navigate(['/front/home'], { queryParams: { returnUrl: state.url } });
      return false;
  }

  canLoad( route: Route,segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
     const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.role === "admin") {
        // logged in as admin so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/front/home']);
    return false;
  }
  
}
