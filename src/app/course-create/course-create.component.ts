import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent {
  CourseCreateForm= new FormGroup({
  CourseName: new FormControl(),
  InstructorName: new FormControl(),
  InstructorEmail: new FormControl(),
  InstructorPhone: new FormControl(),
  CourseDuration: new FormControl(),
  CourseDescription: new FormControl(),
  CoursePreRequisites: new FormControl(),
  CourseOutcome: new FormControl()
})
onSubmit()
{
  console.warn(this.CourseCreateForm.value);
}
}