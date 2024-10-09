import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  welcomeMessage: string;  // Add this variable to store the welcome message
  showPassword: boolean;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }


  onSubmit() {
    if (this.loginForm.valid) {
      const user = this.loginForm.value;

      this._userService.loginUser(user).subscribe(
        (response) => {
          if (response) {
            this._userService.getUsers().subscribe(
              (users) => {
                const loggedInUser = users.find(u => u.email === user.email);
                if (loggedInUser) {

                  sessionStorage.setItem('userEmail', loggedInUser.email);
                  sessionStorage.setItem('userName', loggedInUser.name);

                  this.welcomeMessage = `Welcome, ${loggedInUser.name}!`;

                  setTimeout(() => {
                    if (user.email === 'admin@mm.com') {
                      this._router.navigate(['/admin']);
                    } else {
                      this._router.navigate(['/']);
                    }
                  }, 2000);

                } else {
                  this.errorMessage = 'User not found';
                }
              },
              (error) => {
                console.error(error);
                this.errorMessage = 'Could not fetch user details';
              }
            );
          } else {
            this.errorMessage = 'Invalid email or password';
          }
        },
        (error) => {
          console.error(error);
          this.errorMessage = 'An error occurred during login';
        }
      );
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword; // Toggle password visibility
}


}
