import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/user/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public currentUser:any
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(value=>{
      this.currentUser=value
    });
  }

}
