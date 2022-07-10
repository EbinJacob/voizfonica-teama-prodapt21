import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ConnectableObservable } from 'rxjs';

import { SignupService } from '../signup.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';

  constructor(private _service : SignupService, private _route : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("Response reveived");
        this._route.navigate(['/customer'])
      },
      error => {
        console.log("Exception occured");
        this.msg = "Bad Credentials, Please enter valid E-mail ID and password"
      }
      
    )
  }
}
