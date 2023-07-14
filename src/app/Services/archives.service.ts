import { Observable } from 'rxjs';
import { Archives } from './../models/archives';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArchivesService {
  deleteFaq(id: any): Observable<any> {
    return this.httpClient.delete<any>(`${this.API}/${id}`);
  }

  API = "http://localhost:8080/api/archives/archives"
  constructor(private httpClient:HttpClient) { }

  getAllArchives(): Observable<Archives[]>{
   return this.httpClient.get<Archives[]>(`${this.API}`);
  }

  saveArchives(Archives:Archives):  Observable<object>{
   return this.httpClient.post(`${this.API}`, Archives);
  }

}

