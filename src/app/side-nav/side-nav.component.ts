import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LogoutService } from '../shared/services/logout.service';
import { User } from '../shared/models/user.model';
import { UserDetailsService } from '../shared/services/user-details.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  fullImagePath: string;
  name: any;
  panleExpanded = true;
  testValue: string = '';
  httpError: any;
  user:User;


  constructor( private router: Router, private logoutService: LogoutService,
    private userDetailsService: UserDetailsService) {
     
     }

     ngOnInit(){
       
     }

  doLogOut() {
    this.logoutService.logout().subscribe(
      response => {
        this.router.navigateByUrl('/chum');
        console.log("Logout");
      },
      error => {
        this.httpError = error;
      }
    );
  }

  toAccountSettings() {
    this.router.navigateByUrl('/chum/accountsettings');
  }
  toEditProfile(){
    this.router.navigateByUrl('/chum/editprofile');
  }
  toMain(){
    this.router.navigateByUrl('/chum/main');
  }
}
