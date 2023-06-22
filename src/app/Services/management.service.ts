import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Management } from '../models/management';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {
API = "http://localhost:8080/api/management/manage"
  constructor(private httpClient:HttpClient) { }

 getAllManagement(): Observable<Management[]>{
  return this.httpClient.get<Management[]>(`${this.API}`);
 }

 saveManagement(management:Management):  Observable<object>{
  return this.httpClient.post(`${this.API}`, management);
 }
}
