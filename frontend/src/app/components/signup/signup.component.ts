import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  addUser: FormGroup;
  errorMessage: string;

  constructor(private _fb: FormBuilder,
    private _http: HttpClient,
    private _router: Router,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.addUser = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required]]
    });
  }

  // Check if form control is invalid and touched or dirty
  isControlInvalid(controlName: string): boolean {
    const control = this.addUser.get(controlName);
    return control ? control.invalid && (control.touched || control.dirty) : false;
  }

  onSubmit(): void {
    if (this.addUser.invalid) {
      this.errorMessage = 'Please fill out all required fields correctly.';
      return;
    }

    if (this.addUser.value.password !== this.addUser.value.confirm_password) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    // (POST) ADD USER
    this._userService.addUser(this.addUser.value).subscribe(
      (res) => {
        console.log('User added successfully', res);
        alert(`Welcome, ${this.addUser.value.name}!`);
        this._router.navigate(['/sign-in']);
      },
      (error) => {
        console.error('There was an error!', error);
        this.errorMessage = 'An error occurred while signing up';
      }
    );
  }
}
