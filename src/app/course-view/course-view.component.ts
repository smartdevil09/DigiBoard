import { Component } from '@angular/core';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent {
  json = `[ { "CourseName" : "IT Service Delivery" , "InstructorName" : "Dr. Maria", "InstructorEmail" : "shdv@sdhjb.com", "InstructorPhone" : "236537223","CourseDuration" : "6 months", "CourseDescription" : "test description", "CourseOutcome" : "Lifecyle of ITIL", "CoursePreRequisites" : "ITIL" }, 
  {  "CourseName" : "IT Info Sec admin" , "InstructorName" : "Dr. Yang", "InstructorEmail" : "sd@dfh.com", "InstructorPhone" : "8374373478","CourseDuration" : "6 months", "CourseDescription" : "testg djbs", "CourseOutcome" : "Intro to info sec", "CoursePreRequisites" : "Network" }
  ]`;
  courses = JSON.parse(this.json);
}
