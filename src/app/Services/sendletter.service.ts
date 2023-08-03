import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Letter } from '../models/letter';

@Injectable({
  providedIn: 'root'
})
export class SendletterService {
  findLetterUsingletterTo(arg0: string) {
    throw new Error('Method not implemented.');
  }
  rejected(id: number | undefined) {
    throw new Error('Method not implemented.');
  }



  API = "http://localhost:8080/api/letter/letter"
  constructor(public http: HttpClient) { }

  getAll(): Observable<Letter[]> {
    return this.http.get<Letter[]>(this.API+"/");
  }

  add(data: any): Observable<any> {
    return this.http.post(this.API+"/", data);
  }


  getById(id: any): Observable<Letter> {
    const url = `${this.API}/${id}`;
    return this.http.get<Letter>(url);
  }
  findUserUsingId(id: any): Observable<Letter> {
    const url = `${this.API+"letter"}/${id}`;
    return this.http.get<Letter>(url);
  }
  update(id: any, body: any): Observable<Letter> {
    const url = `${this.API}/${id}`;
    return this.http.put<Letter>(url, body);
  }
  updatekk(id: any, body: any): Observable<Letter> {
    const url = `${this.API+"/kk"}/${id}`;
    return this.http.put<Letter>(url, body);
  }

  findLetterUsingKupitiaKwa(kk: any): Observable<Letter> {
    const url = `${this.API+"/getKk"}/${kk}`;
    return this.http.get<Letter>(url);
  }

  findLetterUsingLetterTo(letterTo: any): Observable<Letter> {
    const url = `${this.API+"/getLetterTo"}/${letterTo}`;
    return this.http.get<Letter>(url);
  }

  updateReject(id: any, body: any): Observable<Letter> {
    const url = `${this.API+"/reject"}/${id}`;
    return this.http.put<Letter>(url, body);
  }

  delete(id: any): Observable<any> {
    const url = `${this.API}/${id}`;
    return this.http.delete(url);
  }

}
