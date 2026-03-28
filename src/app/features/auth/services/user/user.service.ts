import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API = "http://localhost:8080/users"
  private ownerPublicId: string | null = null;

  constructor(private http: HttpClient){ }
  
  setOwnerPublicId(id: string){
    this.ownerPublicId = id;
  }
  getOwnerPublicId() {
    return this.ownerPublicId;
  }

}
