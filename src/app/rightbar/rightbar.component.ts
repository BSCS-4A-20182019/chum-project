import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractFormComponent } from '../shared/abstract-component/abstract-form.component';
import { QuestionsService } from '../shared/services/questions.service';
import { UserDetailsService } from '../shared/services/user-details.service';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.css']
})
export class RightbarComponent extends AbstractFormComponent implements OnInit {

  constructor(questionsService: QuestionsService, private router: Router,
    private userDetailsService: UserDetailsService) {
    super(questionsService);
}

  ngOnInit() {
  }

  getComponentName() {
    return 'rightbar';
}
}
