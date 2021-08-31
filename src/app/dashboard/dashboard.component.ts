import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../auth.service';
import {UserService} from '../user.service';
import firebase from 'firebase';

@Component({
  selector: 'dol-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('userIdInput') userIdInputRef: ElementRef;

  constructor(public userService: UserService,
              public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  sendUserId(): void {
    this.userService.userId = this.userIdInputRef.nativeElement.value;
  }
}
