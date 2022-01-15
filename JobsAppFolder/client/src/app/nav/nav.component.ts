import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';
=======
import { User } from '../models/user';
import { AccountService } from '../services/account.service';
import { Observable } from 'rxjs';
>>>>>>> Section-5--Client-login-and-register

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  // loggedIn: boolean = false;
<<<<<<< HEAD
  currentUser$: Observable<User | null>;
=======
  currentUser$: Observable<User|null>;
>>>>>>> Section-5--Client-login-and-register

  constructor(private accountService: AccountService) {
    this.currentUser$ = this.accountService.currentUser$;
  }

  ngOnInit(): void {
    // this.getCurrentUser();
  }

  login() {
<<<<<<< HEAD
    this.accountService.login(this.model).subscribe({
      next: (response) => {
        console.log(response);
      }, error: (error) => {
        console.log("Failed to login", error);
      },
      complete: () => {
        console.log("Login complete");
      }
    });
=======
    this.accountService.login(this.model)
      .subscribe({
        next: (response) => {
          console.log(response);
        }, error: (error) => {
          console.log("Failed to login", error);
        }, complete: () => {
          console.log("Login complete");
        }
      });
>>>>>>> Section-5--Client-login-and-register
  }

  logout() {
    this.accountService.logout();
  }

  // getCurrentUser() {
  //   this.accountService.currentUser$.subscribe((user: User | null) => {
  //     this.loggedIn = !!user;
  //   });
  // }

}
