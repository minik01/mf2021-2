import {Injectable} from '@angular/core';
import firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(public auth: AngularFireAuth,
              private userService: UserService,
              private router: Router) {
    auth.user.subscribe((user) => {
      if (user) {
        userService.userEmail = user.email;
        userService.userName = user.displayName;
        this.router.navigate(['dashboard']);
      } else {
        userService.clear();
        this.router.navigate(['login']);
      }
    });

  }

  public login(): void {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  public logout(): void {
    this.auth.signOut();
    this.router.navigate(['login']);

  }

  public getCurrentUser(): Observable<firebase.User> {
    return this.auth.user;
  }
}
