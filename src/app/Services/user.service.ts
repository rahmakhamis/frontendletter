import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

// const uri = 'http://localhost:8080/api/applicant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // constructor(private http: HttpClient) { }

  // getAllUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(`${uri}/applicant`);
  // }




  API = "http://localhost:8080/api/user/user"
  constructor(public http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.API+"/");
  }

  add(data: any): Observable<any> {
    return this.http.post(this.API+"/", data);
  }

  login(data: any): Observable<any> {
    return this.http.post(this.API+"/login", data);
  }

  getById(id: any): Observable<User> {
    const url = `${this.API}/${id}`;
    return this.http.get<User>(url);
  }

  update(id: any, body: any): Observable<User> {
    const url = `${this.API}/${id}`;
    return this.http.put<User>(url, body);
  }

  delete(id: any): Observable<any> {
    const url = `${this.API}/${id}`;
    return this.http.delete(url);
  }

}
