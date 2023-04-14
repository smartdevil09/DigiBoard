
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProfileService {

    constructor(private http:HttpClient) {}

    // Uses http.get() to load data 
    getProfiles() {
        return this.http.get('http://localhost:8000/profiles');
    }
    
//Uses http.post() to post data 
addProfiles(
    FirstName: string, 
    LastName: string,
    DateOfBirth: string,
    ContactNumber: string,
    Email: string,
    University: string,
    HighestDegree: string,
    Major: string,
    Skills: string,
    SelfIntroduction: string,
        ) {
    this.http.post('http://localhost:8000/profiles',{ 
        FirstName, 
        LastName,
        DateOfBirth,
        ContactNumber,
        Email,
        University,
        HighestDegree,
        Major,
        Skills,
        SelfIntroduction 
    })
        .subscribe((responseData) => {
            console.log(responseData);
        }); 
        
    }
    
deleteProfile(profileId: string) {
    this.http.delete("http://localhost:8000/profiles/" + profileId)
        .subscribe(() => {
            console.log('Deleted: ' + profileId);
        });
        location.reload();
}


updateProfile(
    profileId: string,
    FirstName: string, 
    LastName: string,
    DateOfBirth: string,
    ContactNumber: string,
    Email: string,
    University: string,
    HighestDegree: string,
    Major: string,
    Skills: string,
    SelfIntroduction: string
    ) {
    //request path http://localhost:8000/profiles/5xbd456xx 
    //first and last names will be send as HTTP body parameters 
    this.http.put("http://localhost:8000/profiles/" + 
    profileId,{ FirstName, LastName, DateOfBirth,ContactNumber, Email, University, HighestDegree, Major, Skills, SelfIntroduction })
    .subscribe(() => {
        console.log('Updated: ' + profileId);
    });
}

//Uses http.get() to request data based on student id 
getProfile(profileId: string) {
    return this.http.get('http://localhost:8000/profiles/'+ profileId);
}
                   
    }