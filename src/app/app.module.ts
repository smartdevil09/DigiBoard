import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseViewComponent } from './course-view/course-view.component';
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
import {MatExpansionModule} from '@angular/material/expansion';
import { MainPageComponent } from './main-page/main-page.component';



const routes: Routes = [
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'course-create', component: CourseCreateComponent},
  { path: 'course-view', component: CourseViewComponent},
  { path: 'editCourse/:_id', component: CourseCreateComponent },
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
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
