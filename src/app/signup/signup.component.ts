import { Component, OnInit } from '@angular/core';
import { AbstractFormComponent } from '../shared/abstract-component/abstract-form.component';
import {QuestionsService} from '../shared/services/questions.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';



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
  
  

    constructor(questionsService: QuestionsService, private router: Router, private formbuilder: FormBuilder) {
        super(questionsService);
        this.fullImagePath = './CA.png';
        
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
    this.formGroup.value['birthday'] !== undefined &&
    this.formGroup.value['gender'] !== undefined &&
    this.formGroup.value['confirmpw'] !== undefined ;
    
  } 



}
