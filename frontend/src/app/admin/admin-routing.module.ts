import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './users/users.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'movies', component: MoviesComponent }
    ]
  },
  // { path: '', redirectTo: 'admin', pathMatch: 'full' }, // Redirect to admin by default
  // { path: '**', redirectTo: 'admin' } // Wildcard route for invalid paths
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
