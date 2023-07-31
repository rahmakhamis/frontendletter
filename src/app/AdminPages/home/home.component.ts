

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  FaqService: any;
  constructor(private userService: UserService, ) {}

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
