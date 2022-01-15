import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Jobs App';
  users: any;

<<<<<<< HEAD
  constructor(private http: HttpClient, private accountService: AccountService) {
=======
  constructor(private accountService: AccountService) {
>>>>>>> Section-5--Client-login-and-register

  }
  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userFromLS: any = localStorage.getItem('user');
    const user = JSON.parse(userFromLS);
    this.accountService.setCurrentUser(user);

  }

}