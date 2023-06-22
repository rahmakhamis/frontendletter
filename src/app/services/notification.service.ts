import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private apiUrl: string = environment.apiUrl + 'notification'
  constructor(private http: HttpClient) { }

  getAll(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.apiUrl+"/");
  }

  add(data: any): Observable<any> {
    return this.http.post(this.apiUrl+"/", data);
  }

  getById(id: any): Observable<Notification> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Notification>(url);
  }

  update(id: any, body: any): Observable<Notification> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Notification>(url, body);
  }

  delete(id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
