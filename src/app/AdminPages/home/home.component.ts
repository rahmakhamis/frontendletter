import { ApplicationService } from './../../Services/application.service';
import { Faq } from 'src/app/models/faq';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/Services/faq.service';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  FaqService: any;
  constructor(private userService: UserService, private faqService:FaqService,) {}

  totalUsers: number = 0;
  users: User[] = [];

  fetchTotalNumberOfUsers(): void {
    this.userService.getAllUsers().subscribe((res) => {
      this.users = res;
      // console.log(res);

      this.totalUsers = res.length | 0;
    });
  }

  ngOnInit(): void {
    this.fetchTotalNumberOfUsers();
    this.fetchTotalNumberOfFaq();
  }


  totalFaq: number = 0;
  faq: Faq[] =[];

  fetchTotalNumberOfFaq(): void {
    this.faqService.getAllFaq().subscribe((res) => {
      this.faq = res;
      // console.log(res);

      this.totalFaq = res.length | 0;
    });
  }







}
