import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { ActualiteService } from '../back-office/actualite/actualite.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public actualities:any;

  constructor(private actualiteServices:ActualiteService) { }

  ngOnInit(): void {
    this.actualiteServices.chercherActualites()
    .pipe(take(4))
    .subscribe({
      next:(data:any)=>{
        this.actualities=data['rows']
      },
      error: (error:any)=>{

      },
      complete:()=>{
        
      }
      
    })

  }

}
