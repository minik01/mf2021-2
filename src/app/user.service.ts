import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  public userId = '';
  public userEmail = '';
  public userName = '';

  clear(): void {
    this.userId = '';
    this.userEmail = '';
    this.userName = '';
  }
}
