import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditUserComponent } from '../AdminPages/users/user/edit-user/edit-user.component';
import { UserService } from '../Services/user.service';
import { User } from '../models/user';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.component.html',
  styleUrls: ['./view-document.component.css']
})
export class ViewDocumentComponent implements OnInit {
  letter!:any;

  constructor(    public dialogRef: MatDialogRef<ViewDocumentComponent>,
    private _fb: FormBuilder,
    private router: Router,
    private userService:UserService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sanitizer : DomSanitizer){

  }
  ngOnInit(): void {
    var doc = this.data.letterDoc;
    this.letter = doc;
  }

  doc(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.letter);
  }

}
