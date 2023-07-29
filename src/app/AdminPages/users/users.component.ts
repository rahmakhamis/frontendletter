import { FaqService } from './../../Services/faq.service';
import { User } from 'src/app/models/user';
import { Applicants } from './../../models/applicants';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantsService } from 'src/app/Services/applicants.service';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { Faq, IFaq } from 'src/app/models/faq';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  faq: Faq = new Faq();
  onSubmit() {
    this.FaqService.saveFaq(this.faq).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => console.log(error)
    );
  }
  delete(id: number) {
    this.FaqService.deleteFaq(id).subscribe(() => {
      alert(`user with id: ${id} was successfully deleted!`);
    });
  }
  applicantsDetails: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;

  dataSource!: MatTableDataSource<any>;
  displayedColumns = [
    'id',
    'name',
    'email',
    'phoneNo',
    'role',
    
    'gender',
    'status',
    'actions',
  ];
  notLoggedIn: any;
  constructor(
    private applicantService: ApplicantsService,
    private router: Router,
    private dialog: MatDialog,
    private FaqService: FaqService,
  ) {}

  faqs: IFaq[] = [];

  ngOnInit(): void {
    this.onReload();
    this.dataSource = new MatTableDataSource();
    this.FaqService.getAllFaq().subscribe((res: IFaq[]) => {
      this.faqs = res;
    });
  }

  name = 'r';
  UserService: any;
  onReload() {
    this.applicantService.getAll().subscribe({
      next: (res: any) => {
        this.dataSource = res;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {},
    });
  }

  onCreate() {
    const options = {
      width: '60%',
      disableClose: true,
    };
    this.dialog.open(AddUserComponent, options);
  }

  onEdit(item: Applicants) {
    const options = {
      data: item,
      width: '60%',
      disableClose: true,
    };
    this.dialog.open(EditUserComponent, options);
  }

  onDelete(item: Applicants) {
    this.applicantService.delete(item.id).subscribe({
      next: () => {
        alert('Delete succfull');
        this.onReload();
      },
      error: (err) => {
        this.onReload();
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // sn = 1;
  // First = 'Khamis';
  // Last = 'Ussi';
  // Gender = 'Male';
  // DOB = '2000-02-23';
  // Email = 'jumbezson@gmail.com';
  // Status = 'Admin';
  // Id = 12343234323;
}
