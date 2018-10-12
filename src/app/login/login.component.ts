import { Component } from '@angular/core';
import { AbstractFormComponent } from '../shared/abstract-component/abstract-form.component';
import {QuestionsService} from '../shared/services/questions.service';
import {Router} from '@angular/router';

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

    constructor(questionsService: QuestionsService, private router: Router) {
        super(questionsService);
        this.fullImagePath = './CA.png';
    }

  getComponentName(){
    return 'login';
  }
  
  isDisabled(): Boolean {
    return this.formGroup.value['loginusername'] !== undefined &&
    this.formGroup.value['loginpassword'] !== undefined;
  } 


}
