import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userEmail: string;
  userName: string;

  constructor(private _router: Router) {
    this.userEmail = sessionStorage.getItem('userEmail');
    this.userName = sessionStorage.getItem('userName');
  }

  isAdmin(): boolean {
    return this.userEmail === 'admin@mm.com';
  }

  logout() {
    sessionStorage.removeItem('userEmail');
    sessionStorage.removeItem('userName');
    this._router.navigate(['/sign-in']);
  }
}
