import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {

  @Input() CourseName: string = "";
  @Input() InstructorName: string = "";
  @Input() InstructorEmail: string = "";
  @Input() InstructorPhone: string = "";
  @Input() CourseDuration: string = "";
  @Input() CourseDescription: string = "";
  @Input() CourseOutcome: string = "";
  @Input() CoursePreRequisites: string = "";

  public mode = 'Create'; //default mode
  private id: any; //course ID
  private course: any;


  onSubmit() {
    if (this.mode == 'Create')
      this._myService.addCourses(this.CourseName, this.InstructorName, this.InstructorEmail, this.InstructorPhone, this.CourseDuration, this.CourseDescription, this.CourseOutcome, this.CoursePreRequisites);
    if (this.mode == 'Edit')
      this._myService.updateCourse(this.id, this.CourseName, this.InstructorName, this.InstructorEmail, this.InstructorPhone, this.CourseDuration, this.CourseDescription, this.CourseOutcome, this.CoursePreRequisites);
    this.router.navigate(['/course-view']);
  }
  //initialize the call using CourseService 
  constructor(private _myService: CourseService, public route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('_id')) {
        this.mode = 'Edit'; /*request had a parameter _id */
        this.id = paramMap.get('_id');

        //request course info based on the id
        this._myService.getCourse(this.id).subscribe(
          data => {
            //read data and assign to private variable student
            this.course = data;
            this.CourseName = this.course.CourseName;
            this.InstructorName = this.course.InstructorName;
            this.InstructorEmail = this.course.InstructorEmail;
            this.InstructorPhone = this.course.InstructorPhone;
            this.CourseDuration = this.course.CourseDuration;
            this.CourseDescription = this.course.CourseDescription;
            this.CourseOutcome = this.course.CourseOutcome;
            this.CoursePreRequisites = this.course.CoursePreRequisites;

          },
          err => console.error(err),
          () => console.log('finished loading')
        );
      }
      else {
        this.mode = 'Create';
        this.id = null;
      }
    });
  }
}