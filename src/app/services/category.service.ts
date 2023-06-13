import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl: string = environment.apiUrl + 'patient'
  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl+"/");
  }

  add(data: any): Observable<any> {
    return this.http.post(this.apiUrl+"/", data);
  }

  getById(id: any): Observable<Category> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Category>(url);
  }

  update(id: any, body: any): Observable<Category> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Category>(url, body);
  }

  delete(id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
