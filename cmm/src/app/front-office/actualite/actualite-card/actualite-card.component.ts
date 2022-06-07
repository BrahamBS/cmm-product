import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-actualite-card',
  templateUrl: './actualite-card.component.html',
  styleUrls: ['./actualite-card.component.scss']
})
export class ActualiteCardComponent implements OnInit {
  @Input() photoUrl:string;
  @Input() titre:string;
  @Input() contenue:string;
  
  constructor() { }


  ngOnInit(): void {
  }

  getPhotoUrl(url:string){
    return url === './assets/face-CRMM.jpg' 
                ? './assets/face-CRMM.jpg'
                : `${environment.API_URL}/${url}`;
  }

}
