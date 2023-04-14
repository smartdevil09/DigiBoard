import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  title =' ';
  //declare variable to hold response and make it public to be accessible from components.html
  public profiles: any;
  //initialize the call using ProfileService 
  constructor(private _myService: ProfileService) { }
  ngOnInit() {
      this.getProfiles();
  }
  //method called OnInit
  getProfiles() {
      this._myService.getProfiles().subscribe(
          //read data and assign to public variable students
          data => { this.profiles = data},
          err => console.error(err),
          () => console.log('finished loading')
      );
      

  }
  onDelete(profileId: string) {
    this._myService.deleteProfile(profileId);
}
}
