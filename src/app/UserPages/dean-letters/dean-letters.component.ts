import { Component, ViewChild } from '@angular/core';
import { ApprovedComponent } from '../approved/approved.component';
import { RejectedComponent } from '../rejected/rejected.component';
import { User } from 'src/app/models/user';
import { AddletterComponent } from 'src/app/ReceiverPages/receiver-letter/addletter/addletter.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { SendletterService } from 'src/app/Services/sendletter.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-dean-letters',
  templateUrl: './dean-letters.component.html',
  styleUrls: ['./dean-letters.component.css']
})
export class DeanLettersComponent {

  sendDetails: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;

  dataSource!: MatTableDataSource<any>;
  displayedColumns = ['id','letterFrom','letterTo','letterDoc','status','kk','actions',];
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

  onEdit(item: User) {
    const options = {
      data: item,
      width: '60%',
      disableClose: true,
    };
    this.dialog.open(ApprovedComponent, options);
  }

  onRejected(item: User) {
    const options = {
      data: item,
      width: '60%',
      disableClose: true,
    };
    this.dialog.open(RejectedComponent, options);
  }





  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
