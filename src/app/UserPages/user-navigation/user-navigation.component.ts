import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-navigation',
  templateUrl: './user-navigation.component.html',
  styleUrls: ['./user-navigation.component.css']
})
export class UserNavigationComponent implements OnInit{
  hasRoleVC : boolean = false;
  hasRoleDVC : boolean = false;
  hasRoleDEAN : boolean = false;
  hasRoleREGISTRAR : boolean = false;
  hasRoleHOD: boolean = false;


  ngOnInit(): void {
    var role = localStorage.getItem("role")

    if(role == "VC"){
        this.hasRoleVC = true;
    }else if(role == "DVC"){
      this.hasRoleDVC = true;
    }else if(role == "DEAN"){
      this.hasRoleDEAN = true;
    }else if(role == "HOD"){
      this.hasRoleHOD = true;
    }else if(role == "REGISTRAR"){
      this.hasRoleREGISTRAR = true;
    }else{
      alert("You Do Not Have Role")
    }


  }



}
