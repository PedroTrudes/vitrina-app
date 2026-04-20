import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request.model';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response';
import { RegisterUserRequest } from '../models/register-user-request';
import { RegisterUserResponse } from '../models/register-user-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API = "http://localhost:8080/auth";

  constructor(private http: HttpClient) { }

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API}/login`, data);

  }

  register(data: RegisterUserRequest): Observable<RegisterUserResponse>{
    return this.http.post<RegisterUserResponse>(`${this.API}/register`, data);
  }

  registerByInvite(data: RegisterUserRequest, inviteToken: string): Observable<RegisterUserResponse>{
    return this.http.post<RegisterUserResponse>(`${this.API}/register-with-invite?token=${inviteToken}`, data)
  }

  saveToken(token: string){
    localStorage.setItem('token', token);
  }


  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
  }

}