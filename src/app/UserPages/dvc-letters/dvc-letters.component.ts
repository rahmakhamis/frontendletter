import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddletterComponent } from 'src/app/ReceiverPages/receiver-letter/addletter/addletter.component';
import { SendletterService } from 'src/app/Services/sendletter.service';
import { ApprovedComponent } from '../approved/approved.component';
import { User } from 'src/app/models/user';
import { RejectedComponent } from '../rejected/rejected.component';
import { ViewDocumentComponent } from 'src/app/view-document/view-document.component';

@Component({
  selector: 'app-dvc-letters',
  templateUrl: './dvc-letters.component.html',
  styleUrls: ['./dvc-letters.component.css']
})
export class DVCLETTERSComponent {
  onReject(_t99: any) {
    throw new Error('Method not implemented.');
    }
    onApproved(_t99: any) {
    throw new Error('Method not implemented.');
    }
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
        this.onReloads();
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

      onReloads() {

        this.sendService.findLetterUsingLetterTo("DVC").subscribe({
          next: (res: any) => {
            console.log("dvc",res)
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


       view(element:any){
    const options = {
      data: element,
      width: '60%',
      disableClose: true,
    };
    this.dialog.open(ViewDocumentComponent, options);
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
