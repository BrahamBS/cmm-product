import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IActualite } from './actualite.model';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', 'Bearer masterKey');

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {
  
  constructor(private http:HttpClient) {}

  ajoutActualite(actualite: IActualite):Observable<any>{
    return this.http.post(`${environment.API_URL}/actualites`,actualite,{ 'headers': headers }) as Observable<any>
  }

  chercherActualites(filter = '',pageNumber=1,pageSize=10,sortField='label' ):Observable<any>{
    return this.http.get(`${environment.API_URL}/actualites`,
      {
        params:new HttpParams()
          .set('q', filter)
          .set('page', pageNumber.toString())
          .set('limit', pageSize.toString())
          .set('sort', sortField) ,
        'headers': headers
      }
    ) as Observable<any>
  }

  supprimerActualite(id:string):Observable<any>{
    return this.http.delete(`${environment.API_URL}/actualites/${id}`,{ 'headers': headers }) as Observable<any>
  }

  getActualiteById(id:string):Observable<any>{
          return this.http.get(`${environment.API_URL}/actualites/${id}`,{ 'headers': headers }) as Observable<any>
  }

  updateActualite(id:string, actualite:IActualite):Observable<any>{
    return this.http.put(`${environment.API_URL}/actualites/${id}`,actualite,{ 'headers': headers }) as Observable<any>
  }
}
