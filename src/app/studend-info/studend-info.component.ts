import { Component, OnInit } from '@angular/core';
import { studentService } from '../services/studentService';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-studend-info',
  templateUrl: './studend-info.component.html',
  styleUrls: ['./studend-info.component.scss']
})
export class StudendInfoComponent implements OnInit {

  public students:any[];
  constructor(private studentService:studentService) {

    // this.programForm = this.formBuilder.group({
    //   'prog_type': [null, Validators.required],
    //   'program': [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(4)])],
    //   'program_name': [null, Validators.required],
    //   'priority': [null],
    //   'exit_item': [null],
    //   'dpr_active': false
    // })
   
    }
  ngOnInit() {
    this.getStudents();
  }

  getStudents():void{
    this.studentService.searchNames()
    .subscribe(students => {this.students = students;
                            console.log(this.students.length)});
  }
}
