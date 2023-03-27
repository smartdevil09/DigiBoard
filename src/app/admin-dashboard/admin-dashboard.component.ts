import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  links = ['course-create', 'course-view'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;
}
