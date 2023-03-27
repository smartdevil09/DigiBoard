import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CourseService {

    constructor(private http:HttpClient) {}

    // Uses http.get() to load data 
    getCourses() {
        return this.http.get('http://localhost:8000/courses');
    }

    //Uses http.get() to request data based on student id 
getCourse(courseId: string) {
    return this.http.get('http://localhost:8000/courses/'+ courseId);
}

    //Uses http.post() to post data 
addCourses(CourseName: string, InstructorName: string, InstructorEmail: string, InstructorPhone: string, CourseDuration : string, CourseDescription: string,CourseOutcome : string,CoursePreRequisites: string) {
    this.http.post('http://localhost:8000/courses',{ CourseName, InstructorName, InstructorEmail, InstructorPhone,CourseDuration,CourseDescription,CourseOutcome,CoursePreRequisites })
        .subscribe((responseData) => {
            console.log(responseData);
        }); 

        location.reload();
    }

    deleteCourse(courseId: string) {
        this.http.delete("http://localhost:8000/courses/" + courseId)
            .subscribe(() => {
                console.log('Deleted: ' + courseId);
            });
            location.reload();
    }
            

    updateCourse(courseId: string,CourseName: string, InstructorName: string, InstructorEmail: string, InstructorPhone: string, CourseDuration : string, CourseDescription: string,CourseOutcome : string,CoursePreRequisites: string) {
        //request path http://localhost:8000/courses/5xbd456xx 
        //first and last names will be send as HTTP body parameters 
        this.http.put("http://localhost:8000/courses/" + 
        courseId,{ CourseName, InstructorName, InstructorEmail, InstructorPhone,CourseDuration,CourseDescription,CourseOutcome,CoursePreRequisites })
        .subscribe(() => {
            console.log('Updated: ' + courseId);
        });
    }

}