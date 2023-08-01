import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPassword = false;
  password1 = '';

  loginForm!: FormGroup
  constructor(private router:Router, private userService:UserService , private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });


  }

  // username:any;
  // password:any;


  OnSubmit(){

    if(this.loginForm.invalid){
      return;
    }

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.userService.login(this.loginForm.value).subscribe(
      (response) => {
        console.log('login successfull' , response);
        if(response.role == null){
          alert("Incorrect username or password ")
          this.router.navigate(['/'])
        }else if (response.role == "VC" || response.role == "DVC" || response.role == "DEAN" || response.role == "REGISTRAR" || response.role == "HOD"){
          localStorage.setItem("userId", response.id)
          localStorage.setItem("name" , response.name)
          localStorage.setItem("role", response.role)
          this.router.navigate(["/senderHome"])
        }
      else if (response.role == "STUDENT" ){
        localStorage.setItem("userId" , response.id)
        localStorage.setItem("name" , response.name)
        localStorage.setItem("role", response.role)
        this.router.navigate(["/receiverHome"])


    }
    else if (response.role == "Admin"){
      localStorage.setItem("userId" , response.id)
      localStorage.setItem("name" , response.name)
      localStorage.setItem("role", response.role)
      this.router.navigate(["/adminHome"])

    }
      }
    )




    // if(this.username === 'rahma' && this.password === 'rahma2020'){
    //   this.router.navigate(['/adminHome']);
    // }else if (this.username === 'rahma2' && this.password === '12345'){
    //   this.router.navigate(['/senderHome'])
    // }else if (this.username === 'receiver' &&  this.password === 'receiver123'){
    //   this.router.navigate(['/receiverHome'])
    // }
  }


}
