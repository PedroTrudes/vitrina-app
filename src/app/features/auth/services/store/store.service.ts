import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterStoreRequest } from '../../models/register-store-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private API = "http://localhost:8080/store";

  constructor(private http: HttpClient) { }

  register(data: RegisterStoreRequest, token: string) : Observable<any>{
    const headers = new HttpHeaders({'Authorization': `Bearer ${token}`})
    return this.http.post(`${this.API}`, data, {headers, responseType: 'text'});
  }


}
