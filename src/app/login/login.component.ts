import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ConnectableObservable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { LoginstatusService } from '../loginstatus.service';
import { UserserviceService } from '../userservice.service';
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
  errorMessage:string='';
  temp='';
  

  constructor(private _service : SignupService, private _route : Router, private userService: UserserviceService, private loginStatus: LoginstatusService) { }
  
  ngOnInit(): void {
  }

  submit(){
    console.log(this.user);
    this.userService.login(this.user).subscribe(
      (Response)=>{
        if(Response.enabled==true || Response.enabled==1){
          console.log(Response);
          this.loginStatus.changeLoginStatus(true);
          this.loginStatus.changeUserStatus(Response);
          this.loginStatus.currentUserDetails.subscribe(res=>{
            this.temp=res.emailid;
          })
          if(this.temp==='admin@voizfonica.com'){
            this._route.navigateByUrl('/admindashboard');
          }
          else{
            this._route.navigateByUrl('/customer');
          }
          this.msg="Successfully logged in!"
        }
        else{
          this.msg="Already registered but not verified. Please check your inbox for verification email.";
        }
      },(error)=>{
        console.log("Exception occured!");
        this.msg = "Bad Credentials, Please enter valid E-mail ID and password";
      }
    )

    
    //this._service.loginUserFromRemote(this.user).subscribe(
      //data => {
       // if(data.enabled==true || data.enabled==1){
        //  console.log("Response received");
        //  this._route.navigate(['/customer']);
         // this.loginStatus.changeLoginStatus(true)
         // this.loginStatus.changeUserStatus(data);
       // }
        //else{
    //      this.msg="Already registered but not verified. Please check your inbox for verification email."
    //    }
     // },
   //   error => {
    //    console.log("Exception occured");
   //     this.msg = "Bad Credentials, Please enter valid E-mail ID and password";
      }
      
   
}
