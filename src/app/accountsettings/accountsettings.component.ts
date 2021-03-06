import { Component,  OnInit  }  from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { FormBuilder } from '@angular/forms';

import { AbstractFormComponent } from '../shared/abstract-component/abstract-form.component';
import { QuestionsService } from '../shared/services/questions.service';
import { UserDetailsService } from '../shared/services/user-details.service';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styleUrls: ['./accountsettings.component.css']
})
export class AccountsettingsComponent extends AbstractFormComponent implements OnInit {

  constructor(questionsService: QuestionsService, private router: Router,
    private userDetailsService: UserDetailsService) {
    super(questionsService);
}

getComponentName() {
  return 'accountsettings';
}

  ngOnInit() {
  }

}
