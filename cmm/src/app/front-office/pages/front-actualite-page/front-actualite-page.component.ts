import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs';
import { ActualiteService } from 'src/app/back-office/actualite/actualite.service';

@Component({
  selector: 'app-front-actualite-page',
  templateUrl: './front-actualite-page.component.html',
  styleUrls: ['./front-actualite-page.component.scss']
})
export class FrontActualitePageComponent implements OnInit {

  public actualities:any;

  constructor(private actualiteServices:ActualiteService) { }

  ngOnInit(): void {
    this.actualiteServices.chercherActualites()
    .pipe(
      map((data:any)=>{
      return data.rows
    }))
    .subscribe({
      next:(data:any)=>{
        this.actualities=data
      },
      error: (error:any)=>{

      },
      complete:()=>{
        
      }
      
    })

  }

}
