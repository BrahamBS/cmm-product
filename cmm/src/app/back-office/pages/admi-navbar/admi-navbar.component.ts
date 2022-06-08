import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/user/authentication.service';

@Component({
  selector: 'app-admi-navbar',
  templateUrl: './admi-navbar.component.html',
  styleUrls: ['./admi-navbar.component.scss']
})
export class AdmiNavbarComponent implements OnInit {

  public currentUser:any
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(value=>{
      this.currentUser=value
    });
  }

}
