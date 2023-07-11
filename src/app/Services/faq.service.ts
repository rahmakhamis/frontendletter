import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faq } from '../models/faq';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  deleteFaq(id: any): Observable<any> {
    return this.httpClient.delete<any>(`${this.API}/${id}`);
  }

  API = "http://localhost:8080/api/faq/faq"
  constructor(private httpClient:HttpClient) { }

  getAllFaq(): Observable<Faq[]>{
   return this.httpClient.get<Faq[]>(`${this.API}`);
  }

  saveFaq(faq:Faq):  Observable<object>{
   return this.httpClient.post(`${this.API}`, faq);
  }

}
