import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IIntervention } from './intervention.model';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', 'Bearer masterKey');

@Injectable({
  providedIn: 'root'
})
export class InterventionService {
  constructor(private http:HttpClient) {}

  ajoutIntervention(intervention: IIntervention):Observable<any>{
    return this.http.post(`${environment.API_URL}/interventions`,intervention,{ 'headers': headers }) as Observable<any>
  }

  chercherInterventions(filter = '',pageNumber=1,pageSize=10,sortField='titre' ):Observable<any>{
    return this.http.get(`${environment.API_URL}/interventions`,
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

  supprimerIntervention(id:string):Observable<any>{
    return this.http.delete(`${environment.API_URL}/interventions/${id}`,{ 'headers': headers }) as Observable<any>
  }

  getInterventionById(id:string):Observable<any>{
          return this.http.get(`${environment.API_URL}/interventions/${id}`,{ 'headers': headers }) as Observable<any>
  }

  updateIntervention(id:string, intervention:IIntervention):Observable<any>{
    return this.http.put(`${environment.API_URL}/actualites/${id}`,intervention,{ 'headers': headers }) as Observable<any>
  }
}
