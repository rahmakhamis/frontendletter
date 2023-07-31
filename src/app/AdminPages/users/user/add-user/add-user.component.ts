import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  applicantsForm: FormGroup

  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>,
    private _fb: FormBuilder,
    private router: Router,
    private userServices: UserService
  ) {
    this.applicantsForm= this._fb.group({
      name: '',
      email:'',
      phoneNo: '',
      role: '',
      password: '',
      gender: '',
      status: '',

    });
  }
  reload() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/users']);
    });
  }

  onFormSubmit() {
    if (this.applicantsForm.valid) {
      this.userServices.add(this.applicantsForm.value).subscribe({
        next: () => {
          alert('Success inserted Data');
          this.dialogRef.close();
          this.reload();
        },
        error: () => {},
      });
    }
  }


}
