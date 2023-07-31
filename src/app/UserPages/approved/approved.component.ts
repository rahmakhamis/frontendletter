import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SendletterService } from 'src/app/Services/sendletter.service';
import { Letter } from 'src/app/models/letter';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent {

  letterFrom!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ApprovedComponent>,
    private _fb: FormBuilder,
    private router: Router,
    private sendServiceLetter:SendletterService,
    @Inject(MAT_DIALOG_DATA) public letter: Letter,
  ) {}

  ngOnInit(): void {
    const data = this.letter;
    this.letterFrom = this._fb.group({
      id: data.id,
      kk:''

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

    let id = this.letterFrom.value.id;
    let data =  this.letterFrom.value;
    console.log(data)
    if (this.letterFrom.valid) {
      this.sendServiceLetter.updatekk(id, data).subscribe({
        next: () => {
          alert('Success to Update Data');
          this.dialogRef.close();
          this.reload();
        },
        error: () => {},
      });
    }
  }






  // letterForm: FormGroup

  // constructor(
  //   public dialogRef: MatDialogRef<ApprovedComponent>,
  //   private _fb: FormBuilder,
  //   private router: Router,
  //   private letterService: SendletterService
  // ) {
  //   this.letterForm = this._fb.group({
  //     Id: '',
  //     letterFrom:'',
  //     letterTo: '',
  //     letterDoc: '',
  //     status: 'sent',
  //     kk: '',
  //     rejectedDocReason: 'none',
  //     rejectedReason: 'none',

  //   });
  // }
  // reload() {
  //   this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //     this.router.navigate(['/receiver-letter']);
  //   });
  // }

  // onFormSubmit() {
  //   if (this.letterForm.valid) {
  //     this.letterService.add(this.letterForm.value).subscribe({
  //       next: () => {
  //         alert('Success inserted Data');
  //         this.dialogRef.close();
  //         this.reload();
  //       },
  //       error: () => {},
  //     });
  //   }
  // }

}
