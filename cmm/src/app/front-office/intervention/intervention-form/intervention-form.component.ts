import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTable } from '@angular/material/table';
import { debounceTime, distinctUntilChanged, merge, tap,fromEvent } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { environment } from 'src/environments/environment';
import { FormBuilder, Validators } from '@angular/forms';
import { InterventionService } from 'src/app/back-office/intervention/intervention.service';

@Component({
  selector: 'app-intervention-form',
  templateUrl: './intervention-form.component.html',
  styleUrls: ['./intervention-form.component.scss']
})
export class InterventionFormComponent implements OnInit {

  public natureTypes: {value:string, viewValue:string}[] = [
    { value: 'Materiel Informatique', viewValue: 'Materiel Informatique' },
    { value: 'Materiel Bureautique', viewValue: 'Materiel Bureautique' },
    { value: 'Infrastructure', viewValue: 'Infrastructure' }
  ]


  interventionForm = this.fb.group({
    titre: [null, Validators.required],
    //dateDebut: ['', Validators.required],
    //dateFin: ['', Validators.required],
    nature:['',Validators.required],
    description:['', Validators.required],
    beneficiaires:['', Validators.required],
    prestataires:['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private interventionService: InterventionService,
              private snackBar: MatSnackBar,) {
  
  }
  
  ngOnInit(): void {
   
  }


  get f(){
    return this.interventionForm.controls;
  }


  onSubmit(): void {
      this.interventionService.ajoutIntervention(this.interventionForm.value).subscribe({
        next:(data)=>{
          this.router.navigate(['/front/home']);
          this.snackBar.open("Intervention est ajoutée avec succé", 'Close')
        },
        error:(error)=>{
          this.snackBar.open("Operation d'ajout echoué", 'Close');
          console.error(error)
        },
        complete:()=>{

        }
      })
  }

}
