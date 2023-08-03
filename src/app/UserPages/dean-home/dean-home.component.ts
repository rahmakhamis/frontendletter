import { Component, OnInit } from '@angular/core';
import { SendletterService } from 'src/app/Services/sendletter.service';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-dean-home',
  templateUrl: './dean-home.component.html',
  styleUrls: ['./dean-home.component.css']
})
export class DeanHomeComponent implements OnInit{


totalLettersApproved: any;
totalLetters: any;
constructor(private userService: UserService, private letterService: SendletterService,
lettersApproved:SendletterService,) {}
// card1
totalUsers: number = 0;
users: User[] = [];

fetchTotalNumberOfUsers(): void {
  this.userService.getAll().subscribe((res) => {
    this.users = res;
    // console.log(res);

    this.totalUsers = res.length | 0;
  });
}
ngOnInit(): void {
  this.fetchTotalNumberOfUsers();
}

}
