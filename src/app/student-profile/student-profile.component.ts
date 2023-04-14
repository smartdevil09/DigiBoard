import { Component,Input, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  @Input() FirstName: string = "";
  @Input() LastName: string = "";
  @Input() DateOfBirth:string = "";
  @Input() ContactNumber: string = "";
  @Input() Email: string = "";
  @Input() University: string = "";
  @Input() HighestDegree: string = "";
  @Input() Major:string = "";
  @Input() Skills: string = "";
  @Input() SelfIntroduction: string = "";

  public mode = 'CREATE'; //default mode
  private id: any; //profile ID
  private profile: any;

   onSubmit() 
   {
   
     if (this.mode == 'CREATE')
     this._myService.addProfiles(
      this.FirstName ,
      this.LastName,
      this.DateOfBirth,
      this.ContactNumber,
      this.Email,
      this.University,
      this.HighestDegree,
      this.Major,
      this.Skills,
      this.SelfIntroduction
      );
 if (this.mode == 'EDIT')
     this._myService.updateProfile(
      this.id,
      this.FirstName ,
      this.LastName,
      this.DateOfBirth,
      this.ContactNumber,
      this.Email,
      this.University,
      this.HighestDegree,
      this.Major,
      this.Skills,
      this.SelfIntroduction
      );
     
     this.router.navigate(['/profile-view']);
   }
   constructor(private _myService: ProfileService, private router:Router, public route: ActivatedRoute) { }
   
   ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
        if (paramMap.has('_id'))
            { this.mode = 'EDIT'; /*request had a parameter _id */ 
            this.id = paramMap.get('_id');

             //request student info based on the id
             this._myService.getProfile(this.id).subscribe(
              data => { 
                  //read data and assign to private variable student
                  this.profile = data;
                  //populate the firstName and lastName on the page
                  //notice that this is done through the two-way bindings
                  this.FirstName = this.profile.FirstName;
                  this.LastName = this.profile.LastName;
                  this.DateOfBirth= this.profile.DateOfBirth;
                  this.ContactNumber= this.profile.ContactNumber;
                  this.Email= this.profile.Email;
                  this.University= this.profile.University;
                  this.HighestDegree= this.profile.HighestDegree;
                  this.Major= this.profile.Major;
                  this.Skills= this.profile.Skills;
                  this.SelfIntroduction= this.profile.SelfIntroduction;
              },
              err => console.error(err),
              () => console.log('finished loading')
          );
      } 
          
            else {
              this.mode = 'CREATE';
            this.id = null; 
          }
    });
}
}



 
