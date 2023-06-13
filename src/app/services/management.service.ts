import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environment/environment";
import { Management } from "../models/management";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private apiUrl: string = environment.apiUrl + 'patient'
  constructor(private http: HttpClient) { }

  getAll(): Observable<Management[]> {
    return this.http.get<Management[]>(this.apiUrl+"/");
  }

  add(data: any): Observable<any> {
    return this.http.post(this.apiUrl+"/", data);
  }

  getById(id: any): Observable<Management> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Management>(url);
  }

  update(id: any, body: any): Observable<Management> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Management>(url, body);
  }

  delete(id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
