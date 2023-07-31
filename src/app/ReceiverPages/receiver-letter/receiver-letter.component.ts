import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/user';
import { AddletterComponent } from './addletter/addletter.component';
import { EditUserComponent } from 'src/app/AdminPages/users/user/edit-user/edit-user.component';
import { Letter } from 'src/app/models/letter';
import { SendletterService } from 'src/app/Services/sendletter.service';

@Component({
  selector: 'app-receiver-letter',
  templateUrl: './receiver-letter.component.html',
  styleUrls: ['./receiver-letter.component.css']
})
export class ReceiverLetterComponent {

  sendDetails: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;

  dataSource!: MatTableDataSource<any>;
  displayedColumns = ['id','letterFrom','letterTo','letterDoc','status'];
  notLoggedIn: any;
  constructor(
    private sendService:SendletterService,
    private router: Router,
    private dialog:MatDialog
  ) {}
  ngOnInit(): void {
    this.onReload();
    this.dataSource = new MatTableDataSource();
  }
  name = 'rrrr'
  onReload() {

    this.sendService.getAll().subscribe({
      next: (res: any) => {
        console.log(res)
        this.dataSource = res;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
      },
    });
  }

  onCreate() {
    const options = {
      width: '60%',
      disableClose: true,
    };
    this.dialog.open(AddletterComponent, options);
  }

  // onEdit(item: User) {
  //   const options = {
  //     data: item,
  //     width: '60%',
  //     disableClose: true,
  //   };
  //   this.dialog.open(EditPatientComponent, options);
  // }



  onDelete(item: User) {
    this.sendService.delete(item.id).subscribe({
      next: () => {
        alert("Delete succfull");
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


}
