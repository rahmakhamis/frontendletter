import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword = false;
  password1 = '';
  constructor(private router:Router){}
  username:any;
  password:any;


  OnSubmit(){
    if(this.username === 'rahma' && this.password === 'rahma2020'){
      this.router.navigate(['/adminHome']);
    }else if (this.username === 'rahma2' && this.password === '12345'){
      this.router.navigate(['/senderHome'])
    }else if (this.username === 'receiver' &&  this.password === 'receiver123'){
      this.router.navigate(['/receiverHome'])
    }
  }

}
