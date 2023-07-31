import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SendletterService } from 'src/app/Services/sendletter.service';
import { Letter } from 'src/app/models/letter';

@Component({
  selector: 'app-rejected',
  templateUrl: './rejected.component.html',
  styleUrls: ['./rejected.component.css']
})
export class RejectedComponent {
  rejectedFrom!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<RejectedComponent>,
    private _fb: FormBuilder,
    private router: Router,
    private sendServiceLetter:SendletterService,
    @Inject(MAT_DIALOG_DATA) public letter: Letter,
  ) {}

  ngOnInit(): void {
    const userId = localStorage.getItem("userId")
    const data = this.letter;
    this.rejectedFrom = this._fb.group({
      id: data.id,
      rejectedReason:'',
      rejectedById:userId

      //     letterFrom:'',
      //     letterTo: '',
      //     letterDoc: '',
      //     status: 'sent',
      //     kk: '',
      //     rejectedDocReason: 'none',
      //     rejectedReason: 'none',





    });
  }

  reload() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/senderLetter']);
    });
  }

  onFormSubmit() {

    let id = this.rejectedFrom.value.id;
    let data =  this.rejectedFrom.value;
    if (this.rejectedFrom.valid) {
      this.sendServiceLetter.updateReject(id, data).subscribe({
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

