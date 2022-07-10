import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { SignupService } from '../signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new User();
  msg='';

  constructor(private _service : SignupService, private _router : Router) { }

  ngOnInit(): void {
  }
  signupuser(){
    this._service.signupUserFromRemote(this.user).subscribe(
      data=>{
        console.log("Respose received");
        this.msg="Registration successfull";
      },
      error=>{
        console.log("Exception occured");
        this.msg=error.error;
      }
    )

  }

}

