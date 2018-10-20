import { Component, OnInit } from '@angular/core';
import { AbstractFormComponent } from '../shared/abstract-component/abstract-form.component';
import { QuestionsService } from '../shared/services/questions.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent extends AbstractFormComponent implements OnInit {

  posts: Post[] = [];
  httpError: any;

  constructor(questionsService: QuestionsService, private router: Router, private formbuilder: FormBuilder) {
    super(questionsService);
  }

  ngOnInit() {
    super.ngOnInit();
    // TODO: pull the data from the database
    // this.timelineService.getPosts().subscribe(
    // response => {
    //  this.posts = response as Post[];
    // },
    // error => {
    //  this.httpError = error;
    // }
    //)
  }

  getComponentName() {
    return 'timeline';
  }

  doPost() {
    let post = new Post();
    post.id = 0;
    post.content = this.formGroup.controls['writePost'].value;
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

class Comment {
  id: number;
  userName: User;
  comment: string;
  date: Date;
}