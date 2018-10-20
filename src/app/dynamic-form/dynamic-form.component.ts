import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Question } from '../shared/models/question';

@Component({
  'selector': 'dynamic-form',
  'templateUrl': './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {
  @Input() question: Question;
  @Input() form: FormGroup;
  @Input() questions:Array<Question>;
  formGroup: FormGroup;

  ngOnInit() {
      this.formGroup = this.generateForm(this.questions);
  }

  private generateForm(questions: Array<Question>): FormGroup {
      return new FormGroup({});
  } 
}
