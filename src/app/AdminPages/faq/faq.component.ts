import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FaqService } from 'src/app/Services/faq.service';
import { Faq, IFaq } from 'src/app/models/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit{
  faq:Faq = new Faq();
  faqs:IFaq[] = [];

  constructor(private faqService:FaqService){}
  fetchFaqs(): void {
    this.faqService.getAllFaq().subscribe(res => this.faqs = res);
  }
  newFaq(){
    this.faqService.saveFaq(this.faq).subscribe(data =>{
      console.log(data);
    },error => console.log(error));
  }
  onSubmit(){
    console.log(this.faq);
    this.newFaq();
  }

  delete(id: any): void {
    this.faqService.deleteFaq(id).subscribe( () => {
      alert(`user with id: ${id} was successfully deleted!`);
    });
  }

  ngOnInit(): void {
    this.fetchFaqs();
  }

}
