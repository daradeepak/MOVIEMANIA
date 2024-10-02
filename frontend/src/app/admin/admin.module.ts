import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module'; // Ensure this points to the right module
import { MoviesComponent } from './movies/movies.component';
import { UsersComponent } from './users/users.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    MoviesComponent,
    UsersComponent,
    AdminDashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule, 
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
