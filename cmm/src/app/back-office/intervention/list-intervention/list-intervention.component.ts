import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatTable } from '@angular/material/table';
import { debounceTime, distinctUntilChanged, merge, tap,fromEvent } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { environment } from 'src/environments/environment';
import { IIntervention } from '../intervention.model';
import { InterventionListDataSource } from './intervention-list-datasources';
import { InterventionService } from '../intervention.service';

@Component({
  selector: 'app-list-intervention',
  templateUrl: './list-intervention.component.html',
  styleUrls: ['./list-intervention.component.scss']
})
export class ListInterventionComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<IIntervention>;
  @ViewChild('queryField') queryField: ElementRef;

  dataSource: InterventionListDataSource;
  datasourceLength: number = 1;
  displayedColumns = [
    'titre', 'dateDebut', 'dateFin', 
    'description','beneficiaires','prestataires'
    ];

  constructor(
    private interventionService: InterventionService,
    private route: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) {
    this.dataSource = new InterventionListDataSource(this.interventionService);

  }

  ngOnInit(): void {
    this.dataSource.loadInterventions('', 1, 10);
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 1);
    // @ts-ignore
    fromEvent(this.queryField.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadInterventionPage();
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadInterventionPage())
      )
      .subscribe();
  }

  loadInterventionPage() {
    this.dataSource.loadInterventions(
      this.queryField.nativeElement.value,
      this.paginator.pageIndex + 1,
      this.paginator.pageSize);
  }

  removeActualite(id: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      data: "Confirmez vous la suppression de l'Intervention "
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.interventionService.supprimerIntervention(id).subscribe({
          next: (data) => {
            this.snackBar.open('Intervention à été supprimer avec succée', 'X');
            this.dataSource.loadInterventions('', 1, 10);
          },
          error: (error) => {
            this.snackBar.open(`Error ${JSON.stringify(error)}`);
          },
          complete: () => { }
        })
      }
    });
  }



  getFullUrlPhoto(photoHrl: string): string {
    return photoHrl ?
      `${environment.API_URL}/${photoHrl}` :
      './assets/face-CRMM.jpg';
  }

}
