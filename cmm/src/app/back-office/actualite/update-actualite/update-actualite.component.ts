import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ActualiteService } from '../actualite.service';

@Component({
  selector: 'app-update-actualite',
  templateUrl: './update-actualite.component.html',
  styleUrls: ['./update-actualite.component.scss']
})
export class UpdateActualiteComponent implements OnInit {

  currentActualiteId: string = '';
  currentPhotoUrl: string = ''

  actualiteForm = this.fb.group({
    titre: ['', Validators.required],
    contenue: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private actualiteService:ActualiteService) {
    
  }

  ngOnInit(): void {
    this.route.data.subscribe({
      next: data => {
        let actualite = data['actualite'];
        this.currentActualiteId = actualite.id;
        this.currentPhotoUrl = actualite.photoUrl ?? './assets/face-CRMM.jpg'
        this.actualiteForm.patchValue({
          titre: actualite['titre'], 
          contenue: actualite['contenue'] 
        });


      },
      error: error => console.log(error)
    })
  }


  get f() {
    return this.actualiteForm.controls;
  }

  onSubmit(): void {
    let actualite = this.actualiteForm.value;
    this.actualiteService.updateActualite(this.currentActualiteId, actualite).subscribe({
      next: (data) => {
        this.router.navigate(['/admin/actualite']);
        this.snackBar.open("L'Actualité est mis a jour avec succé", 'x')
      },
      error: (error) => {
        this.snackBar.open("Operation de mis a jour echoué", 'x');
        console.error(error)
      },
      complete: () => { }
    })
  }

  getPhotoUrl(url:string){
    return url === './assets/face-CRMM.jpg' 
                ? './assets/face-CRMM.jpg'
                : `${environment.API_URL}/${url}`;
  }
  refresh(event:any) {
    console.log(`%c Refresh()`, 'background-color:green;color:white');
  }
}
