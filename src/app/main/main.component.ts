import { Component,  OnInit  }  from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { FormBuilder } from '@angular/forms';

import { AbstractFormComponent } from '../shared/abstract-component/abstract-form.component';
import { QuestionsService } from '../shared/services/questions.service';
import { UserDetailsService } from '../shared/services/user-details.service';

@Component({
  'selector': 'app-main',
  'templateUrl': './main.component.html',
  'styleUrls': ['./main.component.css']
      
})
export class MainComponent extends AbstractFormComponent implements OnInit {
  //POST
  posts: Post[] = [];
  httpError: any;
  
  

    constructor(questionsService: QuestionsService, private router: Router,
        private userDetailsService: UserDetailsService) {
        super(questionsService);
    }

    getComponentName() {
         return 'main';
    }

    isDisabled(): boolean {
      return this.formGroup.value['username'] !== undefined &&
        this.formGroup.value['password'] !== undefined &&
        this.formGroup.value['confirmPassword'] !== undefined;
    }
//POST
    doPost() {
      let post = new Post();
      post.id = 0;
      post.content = this.formGroup.controls['mainPost'].value;
      this.posts.push(post);
  
      // TODO: create a post request to the backend to persist the
      // post content to the database
    }
}
class Post {
  id: number;
  content: string;
  date: Date;
  likes: number;
  comments: Comment[];
}

