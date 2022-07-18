import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginstatusService } from '../loginstatus.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  errorMessage:string='';
  constructor(public userService: UserserviceService, private loginStatusService: LoginstatusService, private router: Router) { }
  ngOnInit(): void {
    this.loginStatusService.changeLoginStatus(false);
    this.loginStatusService.changeUserStatus({id:0,emailid:'',fullname:'',enabled:false,password:'',currentPlanId:0});
    this.userService.logout().subscribe((Response)=>{
      localStorage.removeItem('user');
      console.log(localStorage.getItem('user'));
      this.router.navigateByUrl('/login');
    },(error)=>{
      this.errorMessage="Error! Could not logout";
    })
  }
}
