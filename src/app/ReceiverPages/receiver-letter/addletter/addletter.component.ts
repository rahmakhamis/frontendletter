import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddUserComponent } from 'src/app/AdminPages/users/user/add-user/add-user.component';
import { SendletterService } from 'src/app/Services/sendletter.service';

@Component({
  selector: 'app-addletter',
  templateUrl: './addletter.component.html',
  styleUrls: ['./addletter.component.css']
})
export class AddletterComponent implements OnInit {
 letterForm!: FormGroup

  constructor(
    public dialogRef: MatDialogRef<AddletterComponent>,
    private _fb: FormBuilder,
    private router: Router,
    private letterService: SendletterService
  ) {

  }
  ngOnInit(): void {
    const userId = localStorage.getItem("userId")

    this.letterForm = this._fb.group({
      Id: '',
      letterFromId:userId,
      letterTo: '',
      letterDoc: '',
      status: 'waiting',
      kk: 'none',
      rejectedDocReason: 'none',
      rejectedReason: 'none',

    });

  }
  reload() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/receiver-letter']);
    });
  }

  onFormSubmit() {
    if (this.letterForm.valid) {

      console.log(this.letterForm.value)
      this.letterService.add(this.letterForm.value).subscribe({
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
