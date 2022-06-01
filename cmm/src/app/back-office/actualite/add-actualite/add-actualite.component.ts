import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ActualiteService } from '../actualite.service';

@Component({
  selector: 'app-add-actualite',
  templateUrl: './add-actualite.component.html',
  styleUrls: ['./add-actualite.component.scss']
})
export class AddActualiteComponent implements OnInit {

  actualiteForm = this.fb.group({
    titre: [null, Validators.required],
    contenue: [null, Validators.required],
  });

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private actualiteService: ActualiteService,
              private snackBar: MatSnackBar,) {
  
  }
  
  ngOnInit(): void {
   
  }


  get f(){
    return this.actualiteForm.controls;
  }


  onSubmit(): void {
      this.actualiteService.ajoutActualite(this.actualiteForm.value).subscribe({
        next:(data)=>{
          this.router.navigate(['/admin/actualite']);
          this.snackBar.open("Actualite est ajoutée avec succé", 'Close')
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
