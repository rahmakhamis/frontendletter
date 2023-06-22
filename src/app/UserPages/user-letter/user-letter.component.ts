import { Management } from './../../models/management';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ManagementService } from 'src/app/Services/management.service';


@Component({
  selector: 'app-user-letter',
  templateUrl: './user-letter.component.html',
  styleUrls: ['./user-letter.component.css']
})
export class UserLetterComponent implements OnInit{
  // managements!: Management [];
management: Management = new Management();
constructor(private managementService: ManagementService){}

ngOnInit(): void {
  // this.getAllManagement();

}

// getAllManagement(){
//   this.managementService.getAllManagement().subscribe(data =>{
//      this.managements =  data;
//   })
// }

newLatter(){
  this.managementService.saveManagement(this.management).subscribe(data =>{
    console.log(data);
  },error => console.log(error));
}
onSubmit(){
  this.newLatter();


}


}
