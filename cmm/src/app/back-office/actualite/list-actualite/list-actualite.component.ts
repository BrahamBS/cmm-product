import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ActualiteService } from '../actualite.service';
import { ActualiteListDataSource } from './actualite-list-datasource';
import { IActualite } from '../actualite.model';
import { MatTable } from '@angular/material/table';
import { debounceTime, distinctUntilChanged, merge, tap } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-actualite',
  templateUrl: './list-actualite.component.html',
  styleUrls: ['./list-actualite.component.scss']
})
export class ListActualiteComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<IActualite>;
  @ViewChild('queryField') queryField: ElementRef;

  dataSource: ActualiteListDataSource;
  datasourceLength: number = 1;
  displayedColumns = ['titre', 'contenue', 'photo', 'actions'];

  constructor(
    private actualiteService: ActualiteService,
    private route: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) {
    this.dataSource = new ActualiteListDataSource(this.actualiteService);

  }

  ngOnInit(): void {
    this.dataSource.loadActualites('', 1, 10);
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
          this.loadActualitePage();
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadActualitePage())
      )
      .subscribe();
  }

  loadActualitePage() {
    this.dataSource.loadActualites(
      this.queryField.nativeElement.value,
      this.paginator.pageIndex + 1,
      this.paginator.pageSize);
  }

  removeActualite(id: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      data: "Confirmez vous la suppression de l'Actualite "
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.actualiteService.supprimerActualite(id).subscribe({
          next: (data) => {
            this.snackBar.open('Actualite à été supprimer avec succée', 'X');
            this.dataSource.loadActualites('', 1, 10);
          },
          error: (error) => {
            this.snackBar.open(`Error ${JSON.stringify(error)}`);
          },
          complete: () => { }
        })
      }
    });
  }

  updateActualite(id: string) {
    this.route.navigate(['/admin/actualite/update', id])
  }

  gotoAddActulite() {
    this.route.navigate(['/admin/actualite/add'])
  }

  getFullUrlPhoto(photoHrl: string): string {
    return photoHrl ?
      `${environment.API_URL}/${photoHrl}` :
      './assets/face-CRMM.jpg';
  }

}
