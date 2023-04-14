import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MainPageComponent } from './main-page/main-page.component';

//Course Management
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { CourseService } from './course.service';

//Student Profile
import { ProfileService } from './profile.service';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';




const routes: Routes = [
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'course-create', component: CourseCreateComponent},
  { path: 'course-view', component: CourseViewComponent},
  { path: 'editCourse/:_id', component: CourseCreateComponent },
  { path: 'dashboard', component: StudentDashboardComponent },
  { path: 'student-profile', component: StudentProfileComponent},
  { path: 'profile-view', component: ProfileViewComponent},
  { path: 'editProfile/:_id', component: StudentProfileComponent },
  { path: '', component: MainPageComponent},
  { path: '**',  component: NotFoundComponent },
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    CourseCreateComponent,
    CourseViewComponent,
    NotFoundComponent,
    MainPageComponent,
    StudentDashboardComponent,
    ProfileViewComponent,
    StudentProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule, 
    MatIconModule,
    HttpClientModule,
    MatExpansionModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CourseService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
