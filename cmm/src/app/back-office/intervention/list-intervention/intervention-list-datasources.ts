import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import {catchError, finalize, map} from 'rxjs/operators';
import {Observable, BehaviorSubject, of} from 'rxjs';
import { IIntervention } from '../intervention.model';
import { InterventionService } from '../intervention.service';



export class InterventionListDataSource extends DataSource<IIntervention> {

  private interventionSubject = new BehaviorSubject<IIntervention[] | any>([]);
  public interventionCountSubject=new BehaviorSubject<number| any>(0);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private interventionService: InterventionService) {
    super();
  }
  
  loadInterventions(query = '',  pageIndex = 1, pageSize = 10,sortField='label') {
    this.interventionSubject.next(true);
    this.interventionService.chercherInterventions(
      query,
      pageIndex,
      pageSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(interventions =>{
        this.interventionCountSubject.next(interventions.count)
        this.interventionSubject.next(interventions.rows)
      });
  }

  connect(collectionViewer: CollectionViewer): Observable<IIntervention[]> {
    return this.interventionSubject.asObservable();
  }


  disconnect(collectionViewer: CollectionViewer): void {
    this.interventionCountSubject.complete()
    this.interventionSubject.complete();
    this.loadingSubject.complete();
  }
}
