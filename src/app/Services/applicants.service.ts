import { Applicants } from './../models/applicants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicantsService {

  API = "http://localhost:8080/api/applicant/applicant"
  constructor(public http: HttpClient) { }

  getAll(): Observable<Applicants[]> {
    return this.http.get<Applicants[]>(this.API+"/");
  }

  add(data: any): Observable<any> {
    return this.http.post(this.API+"/", data);
  }

  getById(id: any): Observable<Applicants> {
    const url = `${this.API}/${id}`;
    return this.http.get<Applicants>(url);
  }

  update(id: any, body: any): Observable<Applicants> {
    const url = `${this.API}/${id}`;
    return this.http.put<Applicants>(url, body);
  }

  delete(id: any): Observable<any> {
    const url = `${this.API}/${id}`;
    return this.http.delete(url);
  }

}
