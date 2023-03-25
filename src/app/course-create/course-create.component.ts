import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent {
  
  @Input() CourseName:string ="";
  @Input() InstructorName: string ="";
  @Input() InstructorEmail: string ="";
  @Input() InstructorPhone: string ="";
  @Input() CourseDuration: string ="";
  @Input() CourseDescription: string ="";
  @Input() CoursePreRequisites: string ="";
  @Input() CourseOutcome: string ="";

onSubmit()
{
  console.warn(this.CourseName);
}
}