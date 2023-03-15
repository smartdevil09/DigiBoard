import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-registration',
  templateUrl: './course-registration.component.html',
  styleUrls: ['./course-registration.component.css']
})
export class CourseRegistrationComponent {
  CourseRegistrationForm= new FormGroup({
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
  console.warn(this.CourseRegistrationForm.value);
}
}