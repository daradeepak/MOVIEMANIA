import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: any;
  selectedUserId: any;
  userForm: FormGroup;

  constructor(private _users: UserService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getUsers();
  }

  // GET Users
  getUsers() {
    this._users.getUsers().subscribe(
      (res) => {
        this.users = res;
        console.log(res);
      }
    );
  }

  // DELETE User
  deleteUser(id: string): void {
    this._users.deleteUser(id).subscribe(
      (res) => {
        console.log(res);
        this.users = this.users.filter(user => user.id !== id);
      }
    );
  }

  // UPDATE User - populate form
  updateUser(user: any) {
    this.selectedUserId = user.id; // Set the ID of the user to be updated
    this.userForm.patchValue(user); // Populate the form with the selected user's data
  }

  onSubmit() {
    const updatedUser = this.userForm.value;

    this._users.updateUser(this.selectedUserId, updatedUser).subscribe(
      (res) => {
        console.log('User updated successfully:', res);
        this.getUsers();
        this.closeForm();
      },
      (error) => {
        console.log('Error updating user:', error);
      }
    );
  }

  closeForm() {
    this.selectedUserId = null;
  }
}
