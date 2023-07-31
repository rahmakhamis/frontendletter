import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { UserService } from 'src/app/Services/user.service';

import { User } from 'src/app/models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
 userForm!: FormGroup;
applicantForm: any;

  constructor(
    public dialogRef: MatDialogRef<EditUserComponent>,
    private _fb: FormBuilder,
    private router: Router,
    private userService:UserService,
    @Inject(MAT_DIALOG_DATA) public user: User,
  ) {}

  ngOnInit(): void {
    const data = this.user;
    this.userForm = this._fb.group({
      id: data.id,
      name: data.name,
      email: data.email,
      phoneNo: data.phoneNo,
      role: data.role,
      password: data.password,
      gender: data.gender,
      status: data.status,

    });
  }

  reload() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/users']);
    });
  }

  onFormSubmit() {

    let id = this.userForm.value.id;
    let data =  this.userForm.value;
    if (this.userForm.valid) {
      this.userService.update(id, data).subscribe({
        next: () => {
          alert('Success to Update Data');
          this.dialogRef.close();
          this.reload();
        },
        error: () => {},
      });
    }
  }



}
