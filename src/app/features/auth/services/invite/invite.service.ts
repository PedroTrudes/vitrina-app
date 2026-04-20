import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InviteResponse } from '../../models/invite-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InviteService {
  private API = "http://localhost:8080/invites";

  constructor(private http: HttpClient) { }

  getValidToken(token: string): Observable<InviteResponse>{
    return this.http.get<InviteResponse>(`${this.API}/valid/${token}`);
  }

}
