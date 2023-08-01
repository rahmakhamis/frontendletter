import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
showPassword: any;

regeForm: FormGroup

constructor(

  private _fb: FormBuilder,
  private router: Router,
  private userServices: UserService
) {
  this.regeForm= this._fb.group({
    name: '',
    email:'',
    phoneNo: '',
    role: 'sender',
    status:'students',
    password: '',
    gender: '',




  });
}
reload() {
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/login']);
  });
}

onFormSubmit() {
  if (this.regeForm.valid) {
    this.userServices.add(this.regeForm.value).subscribe({
      next: () => {
        alert(' User Successfully Rejistered');

        this.reload();
        console.log()
      },
      error: () => {},
    });
  }
}

}
