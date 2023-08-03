import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SendletterService } from 'src/app/Services/sendletter.service';
import { ApprovedComponent } from 'src/app/UserPages/approved/approved.component';
import { RejectedComponent } from 'src/app/UserPages/rejected/rejected.component';
import { User } from 'src/app/models/user';
import { ViewDocumentComponent } from 'src/app/view-document/view-document.component';

@Component({
  selector: 'app-rejected-letters',
  templateUrl: './rejected-letters.component.html',
  styleUrls: ['./rejected-letters.component.css']
})
export class RejectedLettersComponent {
// onRejected(_t121: any) {
// throw new Error('Method not implemented.');
// }
// onEdit(_t121: any) {
// throw new Error('Method not implemented.');
// }
// view(_t60: any) {
// throw new Error('Method not implemented.');
// }
  sendDetails: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;

  dataSource!: MatTableDataSource<any>;
  displayedColumns = ['id','letterFrom','letterTo','letterDoc','status','actions',];
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

  // onEdit(item: User) {
  //   const options = {
  //     data: item,
  //     width: '60%',
  //     disableClose: true,
  //   };
  //   this.dialog.open(ApprovedComponent, options);
  // }

  view(element:any){
    const options = {
      data: element,
      width: '60%',
      disableClose: true,
    };
    this.dialog.open(ViewDocumentComponent, options);
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
