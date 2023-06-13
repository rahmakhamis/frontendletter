import { Observable } from "rxjs";
import { Application } from "../models/application";
import { environment } from "src/environment/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private apiUrl: string = environment.apiUrl + 'patient'
  constructor(private http: HttpClient) { }

  getAll(): Observable<Application[]> {
    return this.http.get<Application[]>(this.apiUrl+"/");
  }

  add(data: any): Observable<any> {
    return this.http.post(this.apiUrl+"/", data);
  }

  getById(id: any): Observable<Application> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Application>(url);
  }

  update(id: any, body: any): Observable<Application> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Application>(url, body);
  }

  delete(id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
