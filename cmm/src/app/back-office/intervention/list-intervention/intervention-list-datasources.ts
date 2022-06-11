import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import {catchError, finalize, map} from 'rxjs/operators';
import {Observable, BehaviorSubject, of} from 'rxjs';



export class InterventionListDataSource extends DataSource<IActualite> {

  private actualiteSubject = new BehaviorSubject<IActualite[] | any>([]);
  public actualiteCountSubject=new BehaviorSubject<number| any>(0);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private actualiteService: ActualiteService) {
    super();
  }
  
  loadActualites(query = '',  pageIndex = 1, pageSize = 10,sortField='label') {
    this.actualiteSubject.next(true);
    this.actualiteService.chercherActualites(
      query,
      pageIndex,
      pageSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(actualitees =>{
        this.actualiteCountSubject.next(actualitees.count)
        this.actualiteSubject.next(actualitees.rows)
      });
  }

  connect(collectionViewer: CollectionViewer): Observable<IActualite[]> {
    return this.actualiteSubject.asObservable();
  }


  disconnect(collectionViewer: CollectionViewer): void {
    this.actualiteCountSubject.complete()
    this.actualiteSubject.complete();
    this.loadingSubject.complete();
  }
}
