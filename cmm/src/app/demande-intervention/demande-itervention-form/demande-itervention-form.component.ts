import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-demande-itervention-form',
  templateUrl: './demande-itervention-form.component.html',
  styleUrls: ['./demande-itervention-form.component.scss']
})
export class DemandeIterventionFormComponent implements OnInit {

  public natureTypes: {value:string, viewValue:string}[] = [
    { value: 'Materiel Informatique', viewValue: 'Materiel Informatique' },
    { value: 'Materiel Bureautique', viewValue: 'Materiel Bureautique' },
    { value: 'Infrastructure', viewValue: 'Infrastructure' }
  ]


  interventionForm = this.fb.group({
    etablissement: [null, Validators.required],
    typeIntervention: [null, Validators.required],
    description:['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
             // private interventionService: InterventionService,
              private snackBar: MatSnackBar,) {
  
  }
  
  ngOnInit(): void {
   
  }


  get f(){
    return this.interventionForm.controls;
  }


  onSubmit(): void {
      // this.interventionService.ajoutIntervention(this.interventionForm.value).subscribe({
      //   next:(data)=>{
      //     this.router.navigate(['/front/home']);
      //     this.snackBar.open("Intervention est ajoutée avec succé", 'Close')
      //   },
      //   error:(error)=>{
      //     this.snackBar.open("Operation d'ajout echoué", 'Close');
      //     console.error(error)
      //   },
      //   complete:()=>{

      //   }
      // })
  }

}
