import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private ownerPublicId: string | null = null;
  
  setOwnerPublicId(id: string){
    this.ownerPublicId = id;
  }
  getOwnerPublicId() {
    return this.ownerPublicId;
  }

}
