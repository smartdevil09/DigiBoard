import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { CourseUpdateComponent } from './course-update/course-update.component';
import { CourseDeleteComponent } from './course-delete/course-delete.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { CourseService } from './course.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'course-create', component: CourseCreateComponent},
  { path: 'course-view', component: CourseViewComponent},
  { path: 'editCourse/:_id', component: CourseCreateComponent },
  { path: '**',  component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    CourseCreateComponent,
    CourseViewComponent,
    CourseUpdateComponent,
    CourseDeleteComponent,
    NotFoundComponent,
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
    RouterModule.forRoot(routes)
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
