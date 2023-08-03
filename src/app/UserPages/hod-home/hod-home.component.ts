import { Component } from '@angular/core';
import { SendletterService } from 'src/app/Services/sendletter.service';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-hod-home',
  templateUrl: './hod-home.component.html',
  styleUrls: ['./hod-home.component.css']
})
export class HodHomeComponent {
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
