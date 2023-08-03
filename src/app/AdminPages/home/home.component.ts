

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SendletterService } from 'src/app/Services/sendletter.service';

import { UserService } from 'src/app/Services/user.service';
import { Letter } from 'src/app/models/letter';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
totalLettersApproved: any;
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

  // card2
  totalLetters: number = 0;
  letters: Letter[] = [];

  fetchTotalNumberOfLetters(): void {
    this.userService.getAll().subscribe((res) => {
      this.users = res;
      // console.log(res);

      this.totalLetters = res.length | 0;
    });
  }
  // card3

  // LettersApproved: number = 0;
  // lettersApproved: Approved[] = [];

  // fetchTotalNumberOfLettersApproved(): void {
  //   this.userService.getAll().subscribe((res) => {
  //     this.users = res;
  //     // console.log(res);

  //     this.totalLetters = res.length | 0;
  //   });
  // }
















}
