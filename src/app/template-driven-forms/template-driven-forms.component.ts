import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   gender = ['please select one', 'Female', 'Male', 'X'];
  model = new User(1,'','',0,'');

  submit(){

    console.log(this.model);
  }
}
