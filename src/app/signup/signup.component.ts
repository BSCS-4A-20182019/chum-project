import { Component, OnInit } from '@angular/core';
import { AbstractFormComponent } from '../shared/abstract-component/abstract-form.component';
import { QuestionsService } from '../shared/services/questions.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SignupService } from '../shared/services/signup.service';
import { User } from '../shared/models/user.model';
import { UserDetailsService } from '../shared/services/user-details.service';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent extends AbstractFormComponent {

  fullImagePath: string;
  name: any;
  panleExpanded = true;
  testValue: string = '';
  submitted = false;
  user: User;
  httpError: any;

  
  

    constructor(questionsService: QuestionsService, private router: Router, private formbuilder: FormBuilder, private signupService: SignupService,
      private userDetailsService: UserDetailsService) {
        super(questionsService);
        this.fullImagePath = './CA.png';
        this.user = new User();
        
    }
    

  
  getComponentName(){
    return 'signup';
  }


  isDisabled(): boolean {
    return this.formGroup.value['usernameSignup'] !== undefined &&
    this.formGroup.value['passwordSignup'] !== undefined &&
    this.formGroup.value['lastnameSignup'] !== undefined &&
    this.formGroup.value['firstnameSignup'] !== undefined &&
    this.formGroup.value['email'] !== undefined &&
    this.formGroup.value['confirmpw'] !== undefined ;
    
  } 

  doSignup(){
    this.user.username = this.getFormValue('usernameSignup');
    this.user.password = this.getFormValue('passwordSignup');
    this.user.lastName = this.getFormValue('lastnameSignup');
    this.user.firstName = this.getFormValue('firstnameSignup');
    this.user.email = this.getFormValue('email');
    this.user.gender = "Male";
    this.user.birthdate = this.getFormValue('birthdateSignup');
     this.signupService.signUp(this.user).subscribe(
       response => {
         this.userDetailsService.setUserDetails(response as User);
         this.router.navigateByUrl('/chum/login');
       },
       error => {
         this.httpError = error;
       }
     );
  }

  private getFormValue(formName: string) {
    return this.formGroup.controls[formName].value;
  }


  

}
