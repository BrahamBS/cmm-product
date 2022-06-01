import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ActualiteService } from './actualite.service';
import { IActualite } from './actualite.model';

@Injectable({
  providedIn: 'root'
})
export class ActualiteResolver implements Resolve<IActualite> {
  constructor(private actualiteService:ActualiteService){

  }

  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): Observable<IActualite>|IActualite {
    return this.actualiteService.getActualiteById(route.paramMap.get('id') as string)
  }
}
