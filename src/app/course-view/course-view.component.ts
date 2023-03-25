import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {
  //declare variable to hold response and make it public to be accessible from components.html
  public courses: any;
  //initialize the call using StudentService 
  constructor(private _myService: CourseService) { }
  ngOnInit() {
      this.getCourses();
  }
  //method called OnInit
  getCourses() {
      this._myService.getCourses().subscribe(
          //read data and assign to public variable students
          data => { this.courses = data},
          err => console.error(err),
          () => console.log('finished loading')
      );
  }
}
