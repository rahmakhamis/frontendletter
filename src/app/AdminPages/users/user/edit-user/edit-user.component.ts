import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApplicantsService } from 'src/app/Services/applicants.service';
import { Applicants } from 'src/app/models/applicants';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  applicantsForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditUserComponent>,
    private _fb: FormBuilder,
    private router: Router,
    private applicantsService:ApplicantsService,
    @Inject(MAT_DIALOG_DATA) public applicants: Applicants,
  ) {}

  ngOnInit(): void {
    const data = this.applicants;
    this.applicantsForm = this._fb.group({
      id: data.id,
      name: data.name,
      email: data.email,
      phoneNo: data.phoneNo,
      role: data.role,
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

    let id = this.applicantsForm.value.id;
    let data =  this.applicantsForm.value;
    if (this.applicantsForm.valid) {
      this.applicantsService.update(id, data).subscribe({
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
