import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'dol-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(public userService: UserService,
              public authService: AuthService) {
  }

  ngOnInit(): void {
  }

}
