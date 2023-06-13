import { Injectable } from "@angular/core";
import { Applicants } from "../models/applicants";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environment/environment";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private apiUrl: string = environment.apiUrl + 'patient'
  constructor(private http: HttpClient) { }

  getAll(): Observable<Applicants[]> {
    return this.http.get<Applicants[]>(this.apiUrl+"/");
  }

  add(data: any): Observable<any> {
    return this.http.post(this.apiUrl+"/", data);
  }

  getById(id: any): Observable<Applicants> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Applicants>(url);
  }

  update(id: any, body: any): Observable<Applicants> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Applicants>(url, body);
  }

  delete(id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
