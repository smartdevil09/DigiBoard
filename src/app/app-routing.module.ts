import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseRegistrationComponent } from './course-registration/course-registration.component';
import { CourseViewComponent } from './course-view/course-view.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'course-registration', component: CourseRegistrationComponent},
  { path: 'course-view', component: CourseViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
