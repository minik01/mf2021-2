import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {take} from 'rxjs/operators';

@Component({
  selector: 'dol-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {

  }

}
