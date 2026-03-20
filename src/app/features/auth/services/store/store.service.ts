import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterStoreRequest } from '../../models/register-store-request';
import { Observable } from 'rxjs';
import { RegisterStoreResponse } from '../../models/register-store-response';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private API = "http://localhost:8080/store";

  constructor(private http: HttpClient) { }

  register(data: RegisterStoreRequest) : Observable<RegisterStoreResponse>{
    return this.http.post<RegisterStoreResponse>(`${this.API}`, data)
  }


}
