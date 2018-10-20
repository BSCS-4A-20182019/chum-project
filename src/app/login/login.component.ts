import { Component, OnInit } from '@angular/core';
import { AbstractFormComponent } from '../shared/abstract-component/abstract-form.component';
import {QuestionsService} from '../shared/services/questions.service';
import {Router} from '@angular/router';
import { LoginService } from '../shared/services/login.service';
import { User } from '../shared/models/user.model';
import { UserDetailsService } from '../shared/services/user-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent extends AbstractFormComponent {

  fullImagePath: string;
  name: any;
  panleExpanded = true;
  testValue: string = '';
  user: User;
  httpError: any;

    constructor(questionsService: QuestionsService, private router: Router, private loginService: LoginService,
      private userDetailsService: UserDetailsService) {
        super(questionsService);
        this.fullImagePath = './CA.png';
        this.user = new User();
    }

  getComponentName(){
    return 'login';
    
  }
  
  isDisabled(): boolean {
    return this.formGroup.value['username'] !== undefined &&
    this.formGroup.value['password'] !== undefined;
  } 

  doLogin() {
    this.user.username = this.formGroup.controls['usernameLogin'].value;
    this.user.password = this.formGroup.controls['passwordLogin'].value;
     this.loginService.login(this.user).subscribe(
       response => {
         this.userDetailsService.setUserDetails(response as User);
         this.router.navigateByUrl('/chum/main');
       },
       error => {
         this.httpError = error;
       }
     );
  }
}
