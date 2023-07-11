import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApplicantsService } from 'src/app/Services/applicants.service';
import { Applicants } from 'src/app/models/applicants';

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
    private applicantsServices: ApplicantsService
  ) {
    this.applicantsForm= this._fb.group({
      name: '',
      email:'',
      phoneNo: '',
      role: '',
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
      this.applicantsServices.add(this.applicantsForm.value).subscribe({
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
